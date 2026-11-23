'use strict';
/**
 * CATS FROST — servidor.
 * Sin dependencias: solo módulos que ya trae Node (>= 18).
 *
 *  - Todos ven la web: video, tráiler y descargas.
 *  - Solo el administrador (con contraseña) puede subir y borrar archivos.
 *
 *  Variables opcionales:
 *    PORT=8080            puerto
 *    ADMIN_PASSWORD=...   contraseña del administrador (si no, se genera una y se guarda en data/config.json)
 *    MAX_UPLOAD_MB=2048   tamaño máximo por archivo
 *    DATA_DIR=...         dónde se guardan los archivos subidos (útil con un disco persistente)
 *    TRUST_PROXY=1        si está detrás de un proxy/hosting con HTTPS (cookie Secure e IP real)
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pipeline, Transform } = require('stream');

const PORT = Number(process.env.PORT) || 8080;
const HOST = process.env.HOST || '0.0.0.0';
const MAX_BYTES = (Number(process.env.MAX_UPLOAD_MB) || 2048) * 1024 * 1024;
const TRUST_PROXY = process.env.TRUST_PROXY === '1';
const PUBLIC = path.join(__dirname, 'public');
const DATA = process.env.DATA_DIR ? path.resolve(process.env.DATA_DIR) : path.join(__dirname, 'data');
const FILES = path.join(DATA, 'files');
const CONF_FILE = path.join(DATA, 'config.json');
const LIB_FILE = path.join(DATA, 'library.json');
const SESSION_MS = 12 * 60 * 60 * 1000;

fs.mkdirSync(FILES, { recursive: true });

/* ---------------- Configuración (contraseña y secreto) ---------------- */
let conf = {};
try { conf = JSON.parse(fs.readFileSync(CONF_FILE, 'utf8')); } catch { /* primera vez */ }
let confChanged = false;
let generatedPassword = false;
if (!conf.secret) { conf.secret = crypto.randomBytes(32).toString('hex'); confChanged = true; }
if (!conf.password) { conf.password = 'GATO'; confChanged = true; generatedPassword = true; }
if (confChanged) fs.writeFileSync(CONF_FILE, JSON.stringify(conf, null, 2), { mode: 0o600 });
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || conf.password;

/* ---------------- Biblioteca de archivos ---------------- */
const SECTIONS = {
	videos: { video: true },
	trailer: { video: true },
	descargas: { video: false },
};
const VIDEO_MIME = {
	'.mp4': 'video/mp4', '.m4v': 'video/mp4', '.webm': 'video/webm', '.mov': 'video/quicktime', '.ogv': 'video/ogg',
};
const DOWNLOAD_MIME = {
	'.apk': 'application/vnd.android.package-archive', '.zip': 'application/zip', '.pdf': 'application/pdf',
	'.exe': 'application/vnd.microsoft.portable-executable', '.7z': 'application/x-7z-compressed',
};
const STATIC_MIME = {
	'.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
	'.json': 'application/json; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
	'.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.mp4': 'video/mp4', '.webm': 'video/webm',
	'.txt': 'text/plain; charset=utf-8',
};

let library = [];
try {
	const parsed = JSON.parse(fs.readFileSync(LIB_FILE, 'utf8'));
	if (Array.isArray(parsed)) library = parsed;
} catch { /* primera vez */ }

const saveLibrary = () => {
	const tmp = LIB_FILE + '.tmp';
	fs.writeFileSync(tmp, JSON.stringify(library, null, 2));
	fs.renameSync(tmp, LIB_FILE);
};

const publicItem = (it) => ({
	id: it.id, section: it.section, name: it.name, size: it.size, createdAt: it.createdAt, url: `/files/${it.id}`,
});

/* ---------------- Utilidades ---------------- */
const json = (res, code, obj, extra = {}) => {
	const body = JSON.stringify(obj);
	res.writeHead(code, {
		'Content-Type': 'application/json; charset=utf-8',
		'Content-Length': Buffer.byteLength(body),
		'Cache-Control': 'no-store',
		...extra,
	});
	res.end(body);
};

const notFound = (res) => json(res, 404, { error: 'No encontrado' });

const cleanName = (raw) => {
	let n = String(raw || '').replace(/[\u0000-\u001f\u007f<>:"/\\|?*]/g, '_').trim();
	n = n.replace(/\.{2,}/g, '.').replace(/^\.+/, '');
	if (n.length > 120) {
		const ext = path.extname(n).slice(0, 12);
		n = n.slice(0, 120 - ext.length) + ext;
	}
	return n || 'archivo';
};

const contentDisposition = (type, name) => {
	const ascii = name.replace(/[^\x20-\x7e]/g, '_').replace(/["\\]/g, '_');
	return `${type}; filename="${ascii}"; filename*=UTF-8''${encodeURIComponent(name)}`;
};

const clientIp = (req) => {
	if (TRUST_PROXY) {
		const xf = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
		if (xf) return xf;
	}
	return req.socket.remoteAddress || 'ip';
};

const isHttps = (req) => !!req.socket.encrypted || (TRUST_PROXY && req.headers['x-forwarded-proto'] === 'https');

/* ---------------- Sesión del administrador ---------------- */
const sign = (s) => crypto.createHmac('sha256', conf.secret).update(s).digest('base64url');
const makeToken = () => {
	const exp = String(Date.now() + SESSION_MS);
	return `${exp}.${sign(exp)}`;
};
const safeEqual = (a, b) => {
	const ha = crypto.createHash('sha256').update(String(a)).digest();
	const hb = crypto.createHash('sha256').update(String(b)).digest();
	return crypto.timingSafeEqual(ha, hb);
};
const readCookie = (req, name) => {
	const header = req.headers.cookie || '';
	for (const part of header.split(';')) {
		const i = part.indexOf('=');
		if (i > 0 && part.slice(0, i).trim() === name) return part.slice(i + 1).trim();
	}
	return null;
};
const isAdmin = (req) => {
	const t = readCookie(req, 'cf_admin');
	if (!t) return false;
	const [exp, sig] = t.split('.');
	if (!exp || !sig || !/^\d+$/.test(exp) || Date.now() > Number(exp)) return false;
	return safeEqual(sig, sign(exp));
};
const sessionCookie = (req, token, maxAge) =>
	`cf_admin=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${maxAge}${isHttps(req) ? '; Secure' : ''}`;

// Un POST/PUT/DELETE solo vale si viene de esta misma web.
const sameOriginRequest = (req) => {
	if (req.headers['x-cf'] !== '1') return false;
	const origin = req.headers.origin;
	if (!origin) return true;
	try { return new URL(origin).host === req.headers.host; } catch { return false; }
};

// Límite de intentos de contraseña por IP
const attempts = new Map();
const tooManyAttempts = (ip) => {
	const now = Date.now();
	const a = attempts.get(ip);
	if (!a || now > a.reset) return false;
	return a.count >= 8;
};
const noteAttempt = (ip, ok) => {
	const now = Date.now();
	if (ok) { attempts.delete(ip); return; }
	const a = attempts.get(ip);
	if (!a || now > a.reset) attempts.set(ip, { count: 1, reset: now + 10 * 60 * 1000 });
	else a.count += 1;
};
setInterval(() => {
	const now = Date.now();
	for (const [ip, a] of attempts) if (now > a.reset) attempts.delete(ip);
}, 60 * 1000).unref();

const readJson = (req, limit = 10 * 1024) => new Promise((resolve, reject) => {
	let size = 0;
	const chunks = [];
	req.on('data', (c) => {
		size += c.length;
		if (size > limit) { reject(Object.assign(new Error('Solicitud demasiado grande'), { status: 413 })); req.destroy(); return; }
		chunks.push(c);
	});
	req.on('end', () => {
		try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')); } catch { reject(Object.assign(new Error('JSON inválido'), { status: 400 })); }
	});
	req.on('error', reject);
});

/* ---------------- Envío de archivos (con soporte de rangos para el video) ---------------- */
const sendFile = (req, res, filePath, { mime, disposition, cache }) => {
	fs.stat(filePath, (err, st) => {
		if (err || !st.isFile()) return notFound(res);
		const size = st.size;
		let start = 0;
		let end = size - 1;
		let status = 200;
		const range = req.headers.range;
		if (range && size > 0) {
			const m = /^bytes=(\d*)-(\d*)$/.exec(range.trim());
			if (!m || (m[1] === '' && m[2] === '')) {
				res.writeHead(416, { 'Content-Range': `bytes */${size}` });
				return res.end();
			}
			if (m[1] === '') start = Math.max(0, size - Number(m[2]));
			else {
				start = Number(m[1]);
				if (m[2] !== '') end = Math.min(Number(m[2]), size - 1);
			}
			if (start > end || start >= size) {
				res.writeHead(416, { 'Content-Range': `bytes */${size}` });
				return res.end();
			}
			status = 206;
		}
		const headers = {
			'Content-Type': mime,
			'Content-Length': size === 0 ? 0 : end - start + 1,
			'Accept-Ranges': 'bytes',
			'Cache-Control': cache,
		};
		if (status === 206) headers['Content-Range'] = `bytes ${start}-${end}/${size}`;
		if (disposition) headers['Content-Disposition'] = disposition;
		res.writeHead(status, headers);
		if (req.method === 'HEAD' || size === 0) return res.end();
		pipeline(fs.createReadStream(filePath, { start, end }), res, () => {});
	});
};

const serveLibraryFile = (req, res, url) => {
	if (req.method !== 'GET' && req.method !== 'HEAD') return json(res, 405, { error: 'Método no permitido' });
	const id = url.pathname.slice('/files/'.length);
	if (!/^[a-f0-9]{18}$/.test(id)) return notFound(res);
	const item = library.find((x) => x.id === id);
	if (!item) return notFound(res);
	const ext = item.ext || '';
	const asVideo = SECTIONS[item.section].video && VIDEO_MIME[ext];
	const download = url.searchParams.get('download') === '1' || !asVideo;
	sendFile(req, res, path.join(FILES, item.file), {
		mime: asVideo && !download ? VIDEO_MIME[ext] : (DOWNLOAD_MIME[ext] || 'application/octet-stream'),
		disposition: download ? contentDisposition('attachment', item.name) : null,
		cache: 'public, max-age=3600',
	});
};

const serveStatic = (req, res, pathname) => {
	let rel;
	try { rel = decodeURIComponent(pathname); } catch { return notFound(res); }
	if (rel.includes('\0')) return notFound(res);
	if (rel.endsWith('/')) rel += 'index.html';
	const full = path.normalize(path.join(PUBLIC, rel));
	if (full !== PUBLIC && !full.startsWith(PUBLIC + path.sep)) return notFound(res);
	const ext = path.extname(full).toLowerCase();
	const mime = STATIC_MIME[ext];
	if (!mime) return notFound(res);
	if (ext === '.html') {
		res.setHeader('Content-Security-Policy',
			"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; media-src 'self' blob:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'self'");
	}
	sendFile(req, res, full, {
		mime,
		disposition: null,
		cache: ['.html', '.js', '.css', '.json'].includes(ext) ? 'no-cache' : 'public, max-age=3600',
	});
};

/* ---------------- Subidas (el cuerpo de la petición va directo al disco) ---------------- */
const handleUpload = (req, res, url) => {
	if (!isAdmin(req)) return json(res, 401, { error: 'Solo el administrador puede subir archivos' });
	if (!sameOriginRequest(req)) return json(res, 403, { error: 'Origen no permitido' });
	const section = url.searchParams.get('section');
	if (!SECTIONS[section]) return json(res, 400, { error: 'Sección inválida' });
	const name = cleanName(url.searchParams.get('name'));
	const ext = path.extname(name).toLowerCase();
	if (SECTIONS[section].video && !VIDEO_MIME[ext]) {
		return json(res, 400, { error: 'Solo se aceptan videos (mp4, webm, mov, m4v, ogv)' });
	}
	const len = Number(req.headers['content-length']);
	if (!Number.isFinite(len) || len <= 0) return json(res, 411, { error: 'Falta el tamaño del archivo' });
	if (len > MAX_BYTES) return json(res, 413, { error: `El archivo supera el máximo de ${Math.round(MAX_BYTES / 1048576)} MB` }, { Connection: 'close' });

	const id = crypto.randomBytes(9).toString('hex');
	const safeExt = /^\.[a-z0-9]{1,8}$/.test(ext) ? ext : '';
	const file = id + safeExt;
	const dest = path.join(FILES, file);
	const out = fs.createWriteStream(dest, { flags: 'wx' });
	let got = 0;
	const counter = new Transform({
		transform(chunk, enc, cb) {
			got += chunk.length;
			if (got > len) return cb(Object.assign(new Error('too-big'), { code: 'TOO_BIG' }));
			cb(null, chunk);
		},
	});
	pipeline(req, counter, out, (err) => {
		if (err || got !== len) {
			fs.unlink(dest, () => {});
			if (res.writableEnded || res.destroyed) return;
			if (err && err.code === 'TOO_BIG') return json(res, 413, { error: 'Tamaño incorrecto' }, { Connection: 'close' });
			return json(res, 400, { error: 'La subida se interrumpió' });
		}
		const item = { id, section, name, ext: safeExt, file, size: len, createdAt: new Date().toISOString() };
		library.push(item);
		try { saveLibrary(); } catch (e) {
			library.pop();
			fs.unlink(dest, () => {});
			console.error('No se pudo guardar la biblioteca:', e);
			return json(res, 500, { error: 'No se pudo guardar' });
		}
		json(res, 201, publicItem(item));
	});
};

/* ---------------- API ---------------- */
const api = async (req, res, url) => {
	const p = url.pathname;
	const m = req.method;

	if (p === '/api/me' && m === 'GET') return json(res, 200, { server: true, admin: isAdmin(req), maxMB: Math.round(MAX_BYTES / 1048576) });

	if (p === '/api/library' && m === 'GET') {
		const sections = { videos: [], trailer: [], descargas: [] };
		for (const it of library) sections[it.section]?.push(publicItem(it));
		for (const k of Object.keys(sections)) sections[k].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
		return json(res, 200, { sections });
	}

	if (p === '/api/login' && m === 'POST') {
		if (!sameOriginRequest(req)) return json(res, 403, { error: 'Origen no permitido' });
		const ip = clientIp(req);
		if (tooManyAttempts(ip)) return json(res, 429, { error: 'Demasiados intentos. Espera unos minutos.' });
		let data;
		try { data = await readJson(req); } catch (e) { return json(res, e.status || 400, { error: e.message }); }
		const ok = typeof data.password === 'string' && safeEqual(data.password, ADMIN_PASSWORD);
		noteAttempt(ip, ok);
		if (!ok) return json(res, 401, { error: 'Contraseña incorrecta' });
		return json(res, 200, { admin: true }, { 'Set-Cookie': sessionCookie(req, makeToken(), SESSION_MS / 1000) });
	}

	if (p === '/api/logout' && m === 'POST') {
		if (!sameOriginRequest(req)) return json(res, 403, { error: 'Origen no permitido' });
		return json(res, 200, { admin: false }, { 'Set-Cookie': sessionCookie(req, '', 0) });
	}

	if (p === '/api/upload' && m === 'PUT') return handleUpload(req, res, url);

	if (p.startsWith('/api/files/') && m === 'DELETE') {
		if (!isAdmin(req)) return json(res, 401, { error: 'Solo el administrador puede borrar archivos' });
		if (!sameOriginRequest(req)) return json(res, 403, { error: 'Origen no permitido' });
		const id = p.slice('/api/files/'.length);
		if (!/^[a-f0-9]{18}$/.test(id)) return notFound(res);
		const idx = library.findIndex((x) => x.id === id);
		if (idx < 0) return notFound(res);
		const [item] = library.splice(idx, 1);
		saveLibrary();
		fs.unlink(path.join(FILES, item.file), () => {});
		return json(res, 200, { ok: true });
	}

	return notFound(res);
};

/* ---------------- Servidor ---------------- */
const server = http.createServer((req, res) => {
	res.setHeader('X-Content-Type-Options', 'nosniff');
	res.setHeader('Referrer-Policy', 'same-origin');
	let url;
	try { url = new URL(req.url, 'http://localhost'); } catch { return json(res, 400, { error: 'Solicitud inválida' }); }
	const run = async () => {
		if (url.pathname.startsWith('/api/')) return api(req, res, url);
		if (url.pathname.startsWith('/files/')) return serveLibraryFile(req, res, url);
		if (req.method !== 'GET' && req.method !== 'HEAD') return json(res, 405, { error: 'Método no permitido' });
		return serveStatic(req, res, url.pathname);
	};
	run().catch((e) => {
		console.error(e);
		if (!res.headersSent) json(res, 500, { error: 'Error interno' });
		else res.end();
	});
});

// Subidas grandes: sin límite de tiempo por petición
server.requestTimeout = 0;
server.timeout = 0;
server.headersTimeout = 60 * 1000;

server.listen(PORT, HOST, () => {
	console.log('\n  CATS FROST — servidor en marcha');
	console.log(`  Web:           http://localhost:${PORT}`);
	console.log(`  Archivos en:   ${FILES}`);
	if (process.env.ADMIN_PASSWORD) console.log('  Contraseña de administrador: la de la variable ADMIN_PASSWORD');
	else {
		console.log(`  Contraseña de administrador: ${ADMIN_PASSWORD}${generatedPassword ? '   (generada ahora)' : ''}`);
		console.log(`  (guardada en ${CONF_FILE}; puedes cambiarla ahí o con ADMIN_PASSWORD)`);
	}
	console.log('');
});

module.exports = server;
