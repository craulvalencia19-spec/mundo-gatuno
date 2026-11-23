/* CATS FROST — lógica de la web: intro → acceso → concepto → galaxia con carpetas → ventanas */
(() => {
	'use strict';

	const C = window.CONTENT;
	const body = document.body;
	const $ = (s, r = document) => r.querySelector(s);

	/* Crea elementos sin usar innerHTML con datos (los nombres de archivo nunca se interpretan como HTML) */
	const el = (tag, props = {}, ...kids) => {
		const n = document.createElement(tag);
		for (const [k, v] of Object.entries(props)) {
			if (v === false || v == null) continue;
			if (k === 'class') n.className = v;
			else if (k === 'text') n.textContent = v;
			else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
			else n.setAttribute(k, v === true ? '' : v);
		}
		kids.flat().forEach((c) => c != null && n.append(c));
		return n;
	};

	const fmtSize = (b) => {
		if (!Number.isFinite(b)) return '';
		if (b >= 1073741824) return (b / 1073741824).toFixed(2) + ' GB';
		if (b >= 1048576) return (b / 1048576).toFixed(1) + ' MB';
		return Math.max(1, Math.round(b / 1024)) + ' KB';
	};
	const fmtDate = (iso) => {
		try { return new Date(iso).toLocaleDateString('es', { day: 'numeric', month: 'short', year: 'numeric' }); } catch { return ''; }
	};

	/* ===================== Estado y API ===================== */
	const state = {
		online: false,
		admin: false,
		role: null, // 'user' | 'admin' | null
		maxMB: 2048,
		lib: { videos: [], trailer: [], descargas: [] },
		local: { videos: [], trailer: [], descargas: [] }, // vistas previas locales (solo si no hay servidor)
	};

	const api = async (path, opts = {}) => {
		const ctrl = new AbortController();
		const timer = setTimeout(() => ctrl.abort(), opts.timeout || 10000);
		try {
			const res = await fetch(path, {
				credentials: 'same-origin',
				signal: ctrl.signal,
				method: opts.method || 'GET',
				body: opts.body,
				headers: { 'X-CF': '1', ...(opts.headers || {}) },
			});
			if (!(res.headers.get('content-type') || '').includes('application/json')) throw new Error('no-api');
			const data = await res.json();
			if (!res.ok) {
				const e = new Error(data.error || 'Error');
				e.status = res.status;
				throw e;
			}
			return data;
		} finally {
			clearTimeout(timer);
		}
	};

	const checkServer = async () => {
		try {
			const d = await api('/api/me', { timeout: 4000 });
			state.online = true;
			state.admin = !!d.admin;
			state.maxMB = d.maxMB || 2048;
		} catch {
			state.online = false;
			state.admin = false;
			try {
				const r = await fetch(`media/library.json?v=${Date.now()}`, { cache: 'no-store' });
				if (r.ok) {
					const d = await r.json();
					['videos', 'trailer', 'descargas'].forEach((k) => { state.lib[k] = Array.isArray(d[k]) ? d[k] : []; });
				}
			} catch { /* sin biblioteca publicada */ }
			await loadLocal();
		}
	};

	const refreshLib = async () => {
		if (!state.online) return;
		try {
			const d = await api('/api/library');
			state.lib = d.sections;
		} catch { /* se queda con lo último que había */ }
		updateFolderCounts();
	};

	/* ===================== Pantallas ===================== */
	let winOpen = false;
	let view = 'gate';

	const updateScene = () => {
		body.dataset.scene = body.dataset.screen === 'galaxy' && !winOpen ? 'on' : 'off';
	};

	const updateChip = () => {
		const chip = $('#chip');
		const screen = body.dataset.screen;
		const show = !!state.role && !winOpen && (screen === 'galaxy' || (screen === 'home' && view === 'concept'));
		chip.classList.toggle('hidden', !show);
		chip.classList.toggle('admin', state.role === 'admin');
		$('#chipText').textContent = state.role === 'admin' ? 'Modo administrador' : 'Modo usuario';
		$('#chipBtn').textContent = state.role === 'admin' ? 'Cerrar sesión' : 'Cambiar modo';
	};

	const setScreen = (name) => {
		body.dataset.screen = name;
		$('#home').classList.toggle('active', name === 'home');
		$('#galaxy').classList.toggle('active', name === 'galaxy');
		updateScene();
		updateChip();
		if (name === 'home') playBg();
		else pauseBg();
		if (name === 'galaxy') startOrbit();
	};

	const showView = (name) => {
		view = name;
		$('#gate').classList.toggle('hidden', name !== 'gate');
		$('#concept').classList.toggle('hidden', name !== 'concept');
		$('#panel').scrollTop = 0;
		updateChip();
	};

	/* ===================== Video de fondo del inicio ===================== */
	const bg = $('#bgvideo');
	const ambient = $('#ambient');
	let bgFailed = false;
	let waitingGesture = false;

	const stageVisible = () => getComputedStyle($('#stage')).display !== 'none';

	const playBg = () => {
		if (body.dataset.screen !== 'home' || bgFailed || document.hidden) return;
		const p = bg.play();
		if (p && p.catch) {
			p.catch(() => {
				if (waitingGesture) return;
				waitingGesture = true;
				const retry = () => { waitingGesture = false; playBg(); };
				addEventListener('pointerdown', retry, { once: true });
				addEventListener('keydown', retry, { once: true });
			});
		}
		if (stageVisible()) {
			const q = ambient.play();
			if (q && q.catch) q.catch(() => {});
		}
	};
	const pauseBg = () => { bg.pause(); ambient.pause(); };

	bg.addEventListener('error', () => { bgFailed = true; $('#soundBtn').classList.add('hidden'); });
	bg.addEventListener('timeupdate', () => {
		if (Math.abs(ambient.currentTime - bg.currentTime) > 0.4) ambient.currentTime = bg.currentTime;
	});
	document.addEventListener('visibilitychange', () => (document.hidden ? pauseBg() : playBg()));
	$('#soundBtn').addEventListener('click', () => {
		bg.muted = !bg.muted;
		if (!bg.muted) bg.volume = 1;
		$('#soundBtn').textContent = bg.muted ? 'Sonido: no' : 'Sonido: sí';
		playBg();
	});

	/* ===================== Acceso: usuario / administrador ===================== */
	$('#brand').textContent = C.name;
	$('#brand2').textContent = C.name;
	$('#tagline').textContent = C.tagline;
	$('#lead').textContent = C.lead;
	$('#gxTitle').textContent = C.name;
	document.title = `${C.name} — Tráiler y descargas`;

	const gateMsg = (text, kind = 'err') => {
		const m = $('#gateMsg');
		m.textContent = text;
		m.className = `msg ${text ? kind : ''}`;
	};

	const refreshGate = () => {
		$('#adminTitle').textContent = state.admin ? 'Continuar como administrador' : 'Administrador';
		$('#adminForm').classList.add('hidden');
		gateMsg(state.online ? '' : 'Servidor no iniciado: puedes ver la web, pero el modo administrador y las descargas necesitan que el servidor esté activo (npm start).', 'warn');
	};

	const setRole = (role) => {
		state.role = role;
		showView('concept');
	};

	$('#btnUser').addEventListener('click', () => setRole('user'));
	$('#btnAdmin').addEventListener('click', () => {
		if (state.online && state.admin) { setRole('admin'); return; }
		gateMsg('');
		$('#adminForm').classList.remove('hidden');
		$('#adminPass').focus();
	});
	$('#adminForm').addEventListener('submit', async (e) => {
		e.preventDefault();
		const pass = $('#adminPass').value;
		if (!pass) return;
		const btn = $('#adminSubmit');
		btn.disabled = true;
		gateMsg('');
		if (!state.online) {
			// Sin servidor (Live Preview): se pide la contraseña igual y se entra en modo vista previa
			if (pass === 'GATO') {
				state.admin = true;
				$('#adminPass').value = '';
				setRole('admin');
			} else {
				gateMsg('Contraseña incorrecta.');
				$('#adminPass').select();
			}
			btn.disabled = false;
			return;
		}
		try {
			await api('/api/login', { method: 'POST', body: JSON.stringify({ password: pass }), headers: { 'Content-Type': 'application/json' } });
			state.admin = true;
			$('#adminPass').value = '';
			refreshGate();
			setRole('admin');
		} catch (err) {
			gateMsg(err.message === 'no-api' ? 'No se pudo contactar con el servidor.' : err.message);
			$('#adminPass').select();
		} finally {
			btn.disabled = false;
		}
	});

	const logout = async () => {
		try { await api('/api/logout', { method: 'POST' }); } catch { /* da igual */ }
		state.admin = false;
		goGate();
	};

	const goGate = () => {
		state.role = null;
		closeWin();
		setScreen('home');
		refreshGate();
		showView('gate');
	};

	$('#chipBtn').addEventListener('click', () => (state.role === 'admin' ? logout() : goGate()));
	$('#backGate').addEventListener('click', goGate);

	/* ===================== Concepto ===================== */
	C.concepts.forEach((c) => {
		$('#cards').append(el('article', { class: 'card' },
			el('span', { class: 'ic', 'aria-hidden': 'true', text: c.icon }),
			el('h3', { text: c.title }),
			el('p', { text: c.text })));
	});

	const art = $('#art');
	art.append(el('span', { class: 'art-label', text: 'Galería' }));
	C.gallery.forEach((g, i) => {
		art.append(el('button', { class: 'art-thumb', type: 'button', 'aria-label': g.caption, onclick: () => openLightbox(i) },
			el('img', { src: g.thumb, alt: g.caption, loading: 'lazy' })));
	});

	$('#goGalaxy').addEventListener('click', () => {
		setScreen('galaxy');
		refreshLib();
	});
	$('#gxBack').addEventListener('click', () => setScreen('home'));

	/* ===================== Galaxia: carpetas que giran ===================== */
	const orbit = $('#orbit');
	const folders = [];

	// Degradados compartidos por los iconos de carpeta
	document.body.append((() => {
		const wrap = document.createElement('div');
		wrap.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
		wrap.innerHTML = '<svg width="0" height="0" aria-hidden="true"><defs>' +
			'<linearGradient id="fgBack" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2b6dff"/><stop offset="1" stop-color="#0a2a80"/></linearGradient>' +
			'<linearGradient id="fgFront" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8ff7ff"/><stop offset="1" stop-color="#2f7bff"/></linearGradient>' +
			'</defs></svg>';
		return wrap;
	})());

	const folderIcon = (glyph) => {
		const wrap = document.createElement('span');
		wrap.className = 'f-icon';
		wrap.innerHTML = '<svg viewBox="0 0 140 112" aria-hidden="true">' +
			'<path d="M10 22a10 10 0 0 1 10-10h32l14 14h54a10 10 0 0 1 10 10v62a10 10 0 0 1-10 10H20A10 10 0 0 1 10 98z" fill="url(#fgBack)"/>' +
			'<path d="M10 42a10 10 0 0 1 10-10h100a10 10 0 0 1 10 10v56a10 10 0 0 1-10 10H20A10 10 0 0 1 10 98z" fill="url(#fgFront)"/>' +
			'<text x="70" y="88" text-anchor="middle" font-size="36" font-family="system-ui,sans-serif" fill="#03163a"></text></svg>';
		wrap.querySelector('text').textContent = glyph;
		return wrap;
	};

	C.folders.forEach((f) => {
		const btn = el('button', { class: 'folder', type: 'button', 'data-section': f.id, 'aria-label': `${f.name}: ${f.sub}` },
			folderIcon(f.glyph),
			el('span', { class: 'f-name', text: f.name }),
			el('span', { class: 'f-sub', text: f.sub }),
			el('span', { class: 'f-count', text: '' }));
		orbit.append(btn);
		folders.push({ f, btn, count: $('.f-count', btn) });
	});

	const updateFolderCounts = () => {
		folders.forEach(({ f, count }) => {
			const n = itemsFor(f.id).length;
			count.textContent = n ? String(n) : '';
			count.classList.toggle('hidden', !n);
		});
	};

	let orbitRAF = 0;
	let angle = 0;
	let speed = 0.22;
	let dragVel = 0;
	let hovering = false;
	let emerge = 0;
	let orbitStart = 0;
	let lastT = 0;
	const BASE_SPEED = 0.22;
	const easeOut = (t) => 1 - (1 - t) ** 3;

	const layoutOrbit = (now) => {
		const W = orbit.clientWidth;
		const H = orbit.clientHeight;
		const portrait = H > W;
		const R = Math.min(portrait ? W * 0.32 : W * 0.33, 400) * easeOut(emerge);
		const Ry = portrait ? Math.min(H * 0.2, 190) * easeOut(emerge) : Math.min(H * 0.13, 120) * easeOut(emerge);
		folders.forEach((it, i) => {
			const a = angle + (i * Math.PI * 2) / folders.length;
			const z = Math.cos(a);
			const depth = (z + 1) / 2;
			const x = Math.sin(a) * R;
			const y = -z * Ry + Math.sin(now / 900 + i * 2) * 7;
			const s = (0.7 + 0.32 * depth) * (0.55 + 0.45 * emerge);
			it.btn.style.transform = `translate(-50%,-50%) translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0) scale(${s.toFixed(3)})`;
			it.btn.style.opacity = (emerge * (0.5 + 0.5 * depth)).toFixed(3);
			it.btn.style.zIndex = String(Math.round(depth * 50));
			it.btn.style.pointerEvents = emerge > 0.55 ? 'auto' : 'none';
		});
	};

	const orbitFrame = (now) => {
		if (body.dataset.screen !== 'galaxy') { orbitRAF = 0; return; }
		orbitRAF = requestAnimationFrame(orbitFrame);
		const dt = Math.min(0.05, Math.max(0, (now - lastT) / 1000));
		lastT = now;
		if (winOpen) return;
		// Primero gira solo el espacio; las carpetas aparecen un momento después
		const since = (now - orbitStart) / 1000;
		if (since > 1.1) emerge = Math.max(emerge, Math.min(1, (since - 1.1) / 1.5));
		speed += ((hovering ? 0.03 : BASE_SPEED) - speed) * Math.min(1, dt * 4);
		angle += (speed + dragVel) * dt;
		dragVel *= 0.03 ** dt;
		layoutOrbit(now);
	};

	function startOrbit() {
		emerge = 0;
		orbitStart = performance.now();
		lastT = orbitStart;
		layoutOrbit(orbitStart);
		if (!orbitRAF) orbitRAF = requestAnimationFrame(orbitFrame);
	}

	// Arrastrar una carpeta hace girar el anillo; un toque la abre
	let drag = null;
	orbit.addEventListener('pointerdown', (e) => {
		const btn = e.target.closest('.folder');
		if (!btn) return;
		drag = { btn, x: e.clientX, moved: false, id: e.pointerId, t: performance.now(), v: 0 };
		btn.setPointerCapture(e.pointerId);
	});
	orbit.addEventListener('pointermove', (e) => {
		if (!drag || e.pointerId !== drag.id) return;
		const dx = e.clientX - drag.x;
		if (Math.abs(dx) > 5) drag.moved = true;
		if (drag.moved) {
			angle += dx * 0.008;
			const now = performance.now();
			drag.v = (dx * 0.008) / Math.max(0.008, (now - drag.t) / 1000);
			drag.t = now;
			drag.x = e.clientX;
		}
	});
	const endDrag = (e) => {
		if (!drag || e.pointerId !== drag.id) return;
		const d = drag;
		drag = null;
		if (d.moved) dragVel = Math.max(-2.5, Math.min(2.5, d.v));
		else if (e.type === 'pointerup') openWin(d.btn.dataset.section);
	};
	orbit.addEventListener('pointerup', endDrag);
	orbit.addEventListener('pointercancel', endDrag);
	orbit.addEventListener('pointerover', (e) => { if (e.pointerType === 'mouse' && e.target.closest('.folder')) hovering = true; });
	orbit.addEventListener('pointerout', (e) => { if (e.target.closest('.folder')) hovering = false; });
	// Con teclado: Enter / espacio abren la carpeta enfocada
	orbit.addEventListener('keydown', (e) => {
		const btn = e.target.closest('.folder');
		if (btn && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openWin(btn.dataset.section); }
	});

	/* ===================== Ventana gigante de cada carpeta ===================== */
	const win = { section: null, video: null, selectId: null, items: [] };

	const itemsFor = (section) => {
		const items = (state.lib[section] || []).map((x) => ({ ...x, remote: true }));
		if (section === 'videos') items.unshift({ ...C.builtinVideo, builtin: true });
		if (section === 'trailer' && C.builtinTrailer) items.unshift({ ...C.builtinTrailer, builtin: true });
		items.push(...(state.local[section] || []));
		return items;
	};

	const stopWinVideo = () => {
		if (win.video) {
			win.video.pause();
			win.video.removeAttribute('src');
			win.video.load();
		}
	};

	async function openWin(section) {
		const meta = C.folders.find((f) => f.id === section);
		win.section = section;
		win.selectId = null;
		winOpen = true;
		body.classList.add('win-open');
		$('#win').classList.add('open');
		updateScene();
		updateChip();
		$('#winTitle').textContent = meta.name;
		$('#winSub').textContent = meta.sub;
		const pill = $('#winRole');
		pill.textContent = state.role === 'admin' ? 'Administrador' : 'Usuario';
		pill.classList.toggle('admin', state.role === 'admin');
		renderWin(true);
		$('#winClose').focus();
		await refreshLib();
		if (win.section === section && winOpen) renderWin();
	}

	function closeWin() {
		if (!winOpen) return;
		stopWinVideo();
		win.video = null;
		winOpen = false;
		body.classList.remove('win-open');
		$('#win').classList.remove('open');
		$('#winBody').replaceChildren();
		updateScene();
		updateChip();
		folders.find((x) => x.f.id === win.section)?.btn.focus();
	}
	$('#winClose').addEventListener('click', closeWin);

	/* ---- Subida (el administrador) ---- */
	const uploadFile = (file, section, onProgress) => new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('PUT', `/api/upload?section=${encodeURIComponent(section)}&name=${encodeURIComponent(file.name)}`);
		xhr.setRequestHeader('X-CF', '1');
		xhr.setRequestHeader('Content-Type', 'application/octet-stream');
		xhr.upload.onprogress = (e) => { if (e.lengthComputable) onProgress(e.loaded / e.total); };
		xhr.onload = () => {
			let data = {};
			try { data = JSON.parse(xhr.responseText); } catch { /* sin JSON */ }
			if (xhr.status >= 200 && xhr.status < 300) resolve(data);
			else reject(new Error(data.error || `Error ${xhr.status}`));
		};
		xhr.onerror = () => reject(new Error('No se pudo subir: se cortó la conexión o el archivo supera el máximo permitido.'));
		xhr.onabort = () => reject(new Error('Subida cancelada'));
		xhr.send(file);
	});

	/* Panel único del administrador: Elegir archivo -> Guardar -> barra de progreso */
	const savePanel = (section, maxMB, saver) => {
		const isFiles = section === 'descargas';
		const input = el('input', { type: 'file', class: 'hidden' });
		if (!isFiles) input.setAttribute('accept', 'video/*,.mp4,.webm,.mov,.m4v,.ogv');
		const bar = el('i');
		const pct = el('span', { class: 'gh-pick', text: '' });
		const prog = el('div', { class: 'prog hidden' }, bar);
		const msg = el('p', { class: 'msg' });
		const pick = el('span', { class: 'gh-pick', text: 'Ningún archivo elegido' });
		const save = el('button', { class: 'btn primary', type: 'button', text: 'Guardar', disabled: true });
		const choose = el('label', { class: 'btn' }, isFiles ? 'Elegir APK' : 'Elegir video', input);
		let chosen = null;
		input.addEventListener('change', () => {
			chosen = input.files[0] || null;
			msg.className = 'msg'; msg.textContent = '';
			if (chosen && chosen.size > maxMB * 1048576) {
				msg.className = 'msg err';
				msg.textContent = `"${chosen.name}" supera el máximo de ${maxMB} MB.`;
				chosen = null;
			}
			pick.textContent = chosen ? `${chosen.name} · ${fmtSize(chosen.size)}` : 'Ningún archivo elegido';
			save.disabled = !chosen;
		});
		save.addEventListener('click', async () => {
			if (!chosen) return;
			const file = chosen;
			save.disabled = true; input.disabled = true;
			prog.classList.remove('hidden');
			bar.style.width = '0%';
			msg.className = 'msg';
			const t0 = Date.now();
			const onP = (p) => {
				const v = Math.max(0, Math.min(1, p));
				bar.style.width = `${(v * 100).toFixed(1)}%`;
				const secs = (Date.now() - t0) / 1000;
				const eta = v > 0.02 ? Math.max(0, Math.round(secs / v - secs)) : null;
				msg.textContent = `Guardando ${Math.round(v * 100)}%` + (eta !== null ? ` · faltan ~${eta >= 60 ? Math.ceil(eta / 60) + ' min' : eta + ' s'}` : '') + ' — no cierres esta ventana.';
			};
			onP(0);
			try {
				const id = await saver(file, onP);
				bar.style.width = '100%';
				msg.textContent = '¡Listo, guardado!';
				win.selectId = id;
				await new Promise((r) => setTimeout(r, 500));
				if (state.online) await refreshLib(); else await loadLocal();
				renderWin();
			} catch (e) {
				msg.className = 'msg err';
				msg.textContent = e.message || 'No se pudo guardar.';
				prog.classList.add('hidden');
				save.disabled = false; input.disabled = false;
			}
		});
		return el('div', { class: 'note gh' },
			el('strong', { text: isFiles ? 'Subir APK del juego' : 'Subir video' }),
			el('div', { class: 'gh-row' }, choose, save), pick, prog, msg);
	};

	const uploadPanel = (section) => savePanel(section, state.maxMB, async (file, onP) => (await uploadFile(file, section, onP)).id);

	const deleteItem = async (item) => {
		if (!window.confirm(`¿Borrar "${item.name}"? Esto lo quita para todos.`)) return;
		if (!state.online) {
			try {
				await localDelete(item);
				renderWin();
			} catch (e) {
				window.alert(e.message);
			}
			return;
		}
		try {
			await api(`/api/files/${item.id}`, { method: 'DELETE' });
			await refreshLib();
			renderWin();
		} catch (e) {
			window.alert(e.message);
		}
	};


	/* ---- Sin servidor: el administrador elige el archivo y pulsa Guardar (se guarda en este navegador) ---- */
	const idbOpen = () => new Promise((res, rej) => {
		const r = indexedDB.open('catsfrost', 1);
		r.onupgradeneeded = () => r.result.createObjectStore('files', { keyPath: 'id' });
		r.onsuccess = () => res(r.result);
		r.onerror = () => rej(new Error('Este navegador no permite guardar archivos.'));
		r.onblocked = () => rej(new Error('Cierra otras pestañas de esta página y vuelve a intentar.'));
	});
	const idbRun = async (mode, fn) => {
		const db = await idbOpen();
		return new Promise((res, rej) => {
			const tx = db.transaction('files', mode);
			const rq = fn(tx.objectStore('files'));
			tx.oncomplete = () => res(rq && rq.result);
			tx.onerror = () => rej(new Error('No se pudo guardar el archivo (¿falta espacio en el disco?).'));
			tx.onabort = tx.onerror;
		});
	};
	const loadLocal = async () => {
		try {
			const all = (await idbRun('readonly', (s) => s.getAll())) || [];
			['videos', 'trailer', 'descargas'].forEach((k) => { state.local[k] = []; });
			all.sort((a, b) => a.createdAt - b.createdAt).forEach((r) => {
				if (state.local[r.section]) state.local[r.section].push({ id: r.id, name: r.name, size: r.size, createdAt: r.createdAt, url: URL.createObjectURL(r.blob), local: true, idb: true });
			});
		} catch { /* sin archivos guardados */ }
		updateFolderCounts();
	};
	async function localDelete(item) {
		await idbRun('readwrite', (s) => s.delete(item.id));
		await loadLocal();
	}

	const adminOfflinePanel = (section) => {
		if (!(state.role === 'admin' && state.admin)) return null;
		return savePanel(section, 4096, async (file, onP) => {
			const chunks = [];
			const step = 4 * 1048576;
			for (let o = 0; o < file.size; o += step) {
				chunks.push(await file.slice(o, o + step).arrayBuffer());
				onP(Math.min(0.9, (o + step) / file.size * 0.9));
			}
			const id = `local-${Date.now().toString(36)}`;
			const blob = new Blob(chunks, { type: file.type || 'application/octet-stream' });
			await Promise.race([
				idbRun('readwrite', (s) => s.put({ id, section, name: file.name, size: file.size, createdAt: Date.now(), blob })),
				new Promise((_, rej) => setTimeout(() => rej(new Error('El navegador no logró guardar el archivo. Prueba sin modo privado o usa INICIAR-PUBLICO.bat.')), 60000)),
			]);
			onP(1);
			return id;
		});
	};

	const offlineNote = (section) => {
		const note = el('div', { class: 'note' },
			el('p', { text: 'Estás en vista previa (sin servidor): lo que pruebes aquí solo lo ves tú y no se publica. Para publicar de verdad, inicia el servidor con npm start.' }));
		{
			const input = el('input', { type: 'file', accept: section === 'descargas' ? '' : 'video/*', class: 'hidden' });
			input.addEventListener('change', () => {
				const f = input.files[0];
				if (!f) return;
				const item = { id: `local-${Date.now()}`, name: f.name, url: URL.createObjectURL(f), size: f.size, createdAt: Date.now(), local: true };
				state.local[section].push(item);
				win.selectId = item.id;
				renderWin();
			});
			note.append(el('label', { class: 'btn' }, section === 'descargas' ? 'Probar un archivo de mi PC' : 'Probar un video de mi PC', input));
		}
		return note;
	};

	/* ---- Contenido de la ventana ---- */
	function renderWin(loading = false) {
		const section = win.section;
		const host = $('#winBody');
		host.replaceChildren();
		if (loading) {
			host.append(el('p', { class: 'empty', text: 'Cargando…' }));
			return;
		}
		stopWinVideo();
		win.video = null;
		const items = itemsFor(section);
		win.items = items;
		const admin = state.role === 'admin' && state.admin;
		const emptyText = section === 'descargas'
			? 'Todavía no hay archivos publicados.'
			: section === 'trailer'
				? 'El tráiler aún no está publicado. ¡Vuelve pronto!'
				: 'No hay videos todavía.';

		if (section === 'descargas') {
			const wrap = el('div', { class: 'dwin' });
			if (admin && state.online) wrap.append(uploadPanel(section));
			if (!state.online && admin) wrap.append(adminOfflinePanel(section));
			const grid = el('div', { class: 'dgrid' });
			if (!items.length) grid.append(el('p', { class: 'empty', text: emptyText }));
			items.forEach((it) => {
				const ext = (it.name.split('.').pop() || 'file').slice(0, 4).toUpperCase();
				grid.append(el('article', { class: 'dcard' },
					el('span', { class: 'badge', text: ext }),
					el('div', { class: 'dmeta' },
						el('strong', { text: it.name }),
						el('span', { text: `${fmtSize(it.size)} · ${fmtDate(it.createdAt)}` })),
					el('div', { class: 'dact' },
						el('a', { class: 'btn primary', href: it.local ? it.url : `${it.url}?download=1`, download: it.name, text: 'Descargar' }),
						admin ? el('button', { class: 'btn danger', type: 'button', text: 'Borrar', onclick: () => deleteItem(it) }) : null)));
			});
			wrap.append(grid);
			host.append(wrap);
			return;
		}

		// Carpetas de video: reproductor grande + lista
		const video = el('video', { controls: true, playsinline: true, preload: 'metadata' });
		const empty = el('p', { class: 'empty over', text: emptyText });
		const stage = el('div', { class: 'vstage' }, video, empty);
		const list = el('div', { class: 'vlist' });
		const side = el('aside', { class: 'vside' });
		if (admin && state.online) side.append(uploadPanel(section));
		if (!state.online && admin) side.append(adminOfflinePanel(section));
		side.append(list);
		win.video = video;

		video.addEventListener('error', () => {
			if (!video.getAttribute('src')) return;
			empty.textContent = 'No se pudo cargar este video. Revisa que el archivo exista en la carpeta assets o vuelve a subirlo.';
			empty.classList.remove('hidden');
		});
		video.addEventListener('loadeddata', () => { empty.classList.toggle('hidden', items.length > 0); });
		const select = (it) => {
			win.selectId = it.id;
			video.src = it.url;
			video.muted = false;
			video.play().catch(() => {});
			[...list.children].forEach((c) => c.classList.toggle('on', c.dataset.id === it.id));
		};
		items.forEach((it) => {
			list.append(el('div', { class: 'vitem', 'data-id': it.id },
				el('button', { class: 'vpick', type: 'button', onclick: () => select(it) },
					el('span', { class: 'play', 'aria-hidden': 'true', text: '▶' }),
					el('span', { class: 'vtext' },
						el('strong', { text: it.name }),
						el('small', { text: it.builtin ? 'Incluido' : it.local ? 'Vista previa local' : `${fmtSize(it.size)} · ${fmtDate(it.createdAt)}` }))),
				admin && (it.remote || it.idb) ? el('button', { class: 'btn danger mini', type: 'button', text: 'Borrar', onclick: () => deleteItem(it) }) : null));
		});
		empty.classList.toggle('hidden', items.length > 0);
		video.classList.toggle('hidden', items.length === 0);
		host.append(el('div', { class: 'vwin' }, stage, side));
		const first = items.find((x) => x.id === win.selectId) || items[0];
		if (first) select(first);
	}

	/* ===================== Galería (visor) ===================== */
	const lightbox = $('#lightbox');
	let current = 0;
	const showImage = (i) => {
		current = (i + C.gallery.length) % C.gallery.length;
		const g = C.gallery[current];
		$('#lbImg').src = g.full;
		$('#lbImg').alt = g.caption;
		$('#lbCap').textContent = g.caption;
	};
	function openLightbox(i) {
		showImage(i);
		lightbox.classList.add('open');
		$('#lbClose').focus();
	}
	const closeLightbox = () => lightbox.classList.remove('open');
	$('#lbClose').addEventListener('click', closeLightbox);
	$('#lbPrev').addEventListener('click', () => showImage(current - 1));
	$('#lbNext').addEventListener('click', () => showImage(current + 1));
	lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

	addEventListener('keydown', (e) => {
		if (lightbox.classList.contains('open')) {
			if (e.key === 'Escape') closeLightbox();
			else if (e.key === 'ArrowLeft') showImage(current - 1);
			else if (e.key === 'ArrowRight') showImage(current + 1);
			return;
		}
		if (e.key === 'Escape') {
			if (winOpen) closeWin();
			else if (!introDone) window.introFinished();
		}
	});

	/* ===================== Intro → inicio (desvanecido en degradé) ===================== */
	let introDone = false;
	window.introFinished = () => {
		if (introDone) return;
		introDone = true;
		try { window.__introTl && window.__introTl.pause(); } catch { /* ya terminó */ }
		const intro = $('#intro');
		$('#skip')?.remove();
		setScreen('home');
		refreshGate();
		showView('gate');
		intro.classList.add('wiping');
		intro.style.pointerEvents = 'none';
		const cleanup = () => {
			if (window.__stopRain) window.__stopRain();
			intro.remove();
		};
		if (intro.animate) {
			const anim = intro.animate([
				{ maskPosition: '0 100%', WebkitMaskPosition: '0 100%', opacity: 1, offset: 0 },
				{ maskPosition: '0 0%', WebkitMaskPosition: '0 0%', opacity: 1, offset: 0.88 },
				{ maskPosition: '0 0%', WebkitMaskPosition: '0 0%', opacity: 0, offset: 1 },
			], { duration: 1900, easing: 'ease-in-out', fill: 'forwards' });
			anim.onfinish = cleanup;
			setTimeout(cleanup, 2600);
		} else {
			setTimeout(cleanup, 300);
		}
	};
	$('#skip').addEventListener('click', () => window.introFinished());
	setTimeout(() => window.introFinished(), 90000); // red de seguridad: bienvenida (~15 s) + intro (~20 s)

	/* ===================== Arranque ===================== */
	(async () => {
		await checkServer();
		refreshGate();
		await refreshLib();
	})();
})();
