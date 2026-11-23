/* Firma de URLs (AWS Signature V4) para almacenamiento compatible con S3 (Cloudflare R2). Sin dependencias. */
(() => {
	'use strict';
	const enc = new TextEncoder();
	const hex = (b) => [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, '0')).join('');
	const sha256hex = async (s) => hex(await crypto.subtle.digest('SHA-256', enc.encode(s)));
	const hmac = async (key, msg) => crypto.subtle.sign('HMAC', await crypto.subtle.importKey('raw', key, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']), enc.encode(msg));
	const uriEnc = (s) => encodeURIComponent(s).replace(/[!'()*]/g, (c) => '%' + c.charCodeAt(0).toString(16).toUpperCase());

	// c = { endpoint, bucket, ak, sk }  ·  devuelve una URL firmada válida por `expires` segundos
	window.S3Presign = async (c, method, key, expires = 3600, now = new Date()) => {
		const endpoint = c.endpoint.replace(/\/+$/, '');
		const host = new URL(endpoint).host;
		const path = `/${c.bucket}/${key.split('/').map(uriEnc).join('/')}`;
		const amz = now.toISOString().replace(/[:-]|\.\d{3}/g, '');
		const date = amz.slice(0, 8);
		const scope = `${date}/auto/s3/aws4_request`;
		const q = {
			'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
			'X-Amz-Credential': `${c.ak}/${scope}`,
			'X-Amz-Date': amz,
			'X-Amz-Expires': String(expires),
			'X-Amz-SignedHeaders': 'host',
		};
		const cq = Object.keys(q).sort().map((k) => `${uriEnc(k)}=${uriEnc(q[k])}`).join('&');
		const canonical = `${method}\n${path}\n${cq}\nhost:${host}\n\nhost\nUNSIGNED-PAYLOAD`;
		const sts = `AWS4-HMAC-SHA256\n${amz}\n${scope}\n${await sha256hex(canonical)}`;
		let k = await hmac(enc.encode(`AWS4${c.sk}`), date);
		k = await hmac(k, 'auto');
		k = await hmac(k, 's3');
		k = await hmac(k, 'aws4_request');
		const sig = hex(await hmac(k, sts));
		return `${endpoint}${path}?${cq}&X-Amz-Signature=${sig}`;
	};
})();
