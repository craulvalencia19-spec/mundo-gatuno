/* Intro modo hacker: lluvia digital + texto "scramble" en azules y celestes (anime.js local) */
(() => {
	'use strict';

	const CONTENT = window.CONTENT;
	const NAME = CONTENT.name;

	/* ---------- Lluvia digital ---------- */
	const startRain = (canvas) => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return () => {};
		const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ01<>/\\{}[]#$%&*+=ΣΩΔ0123456789'.split('');
		const size = 16;
		const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
		let w = 0;
		let h = 0;
		let drops = [];
		let stopped = false;
		let last = 0;
		let raf = 0;

		const resize = () => {
			w = canvas.clientWidth;
			h = canvas.clientHeight;
			canvas.width = Math.max(1, Math.floor(w * dpr));
			canvas.height = Math.max(1, Math.floor(h * dpr));
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			drops = Array.from({ length: Math.ceil(w / size) }, () => Math.random() * -40);
		};
		resize();
		window.addEventListener('resize', resize);

		const frame = (t) => {
			if (stopped) return;
			raf = requestAnimationFrame(frame);
			if (t - last < 42) return; // ~24 cuadros por segundo: suficiente y liviano
			last = t;
			// Desvanece lo anterior (deja estela) sin tapar el fondo
			ctx.globalCompositeOperation = 'destination-out';
			ctx.fillStyle = 'rgba(0,0,0,0.13)';
			ctx.fillRect(0, 0, w, h);
			ctx.globalCompositeOperation = 'source-over';
			ctx.font = `${size}px ui-monospace, Consolas, monospace`;
			for (let i = 0; i < drops.length; i++) {
				const y = drops[i] * size;
				const ch = chars[(Math.random() * chars.length) | 0];
				const r = Math.random();
				ctx.fillStyle = r > 0.94 ? '#e8fbff' : r > 0.5 ? '#38d6ff' : '#2f7bff';
				ctx.fillText(ch, i * size, y);
				if (y > h && Math.random() > 0.975) drops[i] = Math.random() * -10;
				drops[i] += 1;
			}
		};
		raf = requestAnimationFrame(frame);

		return () => {
			stopped = true;
			cancelAnimationFrame(raf);
			window.removeEventListener('resize', resize);
		};
	};

	window.__stopRain = startRain(document.getElementById('rain'));

	/* ---------- Palabras de la diapositiva 2 (en azules/celestes) ---------- */
	const features = document.getElementById('features');
	const rows = [2, 3, 4, 3, 2];
	let k = 0;
	rows.forEach((n) => {
		const row = document.createElement('div');
		row.className = 'row';
		for (let i = 0; i < n; i++) {
			const p = document.createElement('p');
			p.textContent = CONTENT.keywords[k % CONTENT.keywords.length];
			const hue = 190 + ((k * 11) % 45); // 190–235: celeste → azul
			const light = 58 + ((k * 7) % 22);
			p.style.color = `hsl(${hue} 100% ${light}%)`;
			row.appendChild(p);
			k++;
		}
		features.appendChild(row);
	});

	document.getElementById('introTitle').textContent = ' ';
	document.getElementById('introSub').textContent = ' ';

	const C = {
		bg1: '#00040c', bg2: '#021433', bg3: '#010a1c',
		cyan: '#7df9ff', blue: '#3d8bff', ice: '#cfefff', white: '#ffffff',
	};

	try {
		if (!window.anime) throw new Error('anime.js no se cargó');
		const { createTimeline, scrambleText, stagger } = window.anime;

		const tl = createTimeline({ loop: false, onComplete: () => window.introFinished && window.introFinished() });
		window.__introTl = tl;

		// 1) Pirámide de "Presentando"
		tl.add('.slide:nth-child(1)', {
			opacity: { to: 1, duration: 250, ease: 'linear' },
			scale: [{ from: .75, to: 1, duration: 1500, ease: 'inOut(3.5)' }],
			ease: 'inOut(3)',
		});
		tl.add('#introCenter', {
			scale: { from: 3 },
			color: { from: C.white, to: C.cyan },
			innerHTML: scrambleText({ override: ' ', ease: 'inQuad', duration: 500, from: 'center', cursor: '░▒▓█' }),
		}, '<<');
		tl.add('#intro', { backgroundColor: C.bg2 }, '<<+=50');
		tl.add('.slide:nth-child(1) p:not(.center)', {
			scale: { from: .75 },
			color: { to: C.blue },
			innerHTML: scrambleText({ override: ' ', from: 'center', duration: 500, revealDelay: 250, cursor: '░▒▓', perturbation: .25 }),
		}, stagger([250, 750], { grid: true, from: 'center', ease: 'out(3)', start: '<<' }));
		tl.add('.slide:nth-child(1) p:not(.center)', {
			innerHTML: scrambleText({ text: '', override: false, from: 'center', ease: 'outQuad', reversed: true, duration: 800, cursor: '░▒▓' }),
		}, '<+=150');
		tl.add('#intro', { backgroundColor: C.bg1 }, '<-=600');
		tl.add('#introCenter', {
			scale: 1.5,
			color: { to: C.ice },
			ease: 'inOutExpo',
			duration: 1500,
			innerHTML: scrambleText({ text: NAME, ease: 'inQuad', override: false, from: 'center', duration: 1000, perturbation: .25 }),
		}, '<<');
		tl.add('#introCenter', {
			scale: 1,
			color: C.cyan,
			ease: 'inOutExpo',
			duration: 1150,
			innerHTML: scrambleText({ override: false, text: 'Aventura en 2D', from: 'right', duration: 950, settleDuration: 500, ease: 'inOut' }),
		}, '<+=250');
		tl.add('#introCenter', {
			innerHTML: scrambleText({ text: '', override: false, from: 'random', reversed: true, duration: 850, perturbation: .5 }),
		}, '<+=500');

		// 2) Palabras clave
		tl.set('.slide:nth-child(2)', { opacity: 1 }, '<<');
		tl.add('.slide:nth-child(2) p', {
			innerHTML: scrambleText({ override: ' ', from: 'center', duration: 500, revealDelay: 250, cursor: '░▒▓', perturbation: .5 }),
		}, stagger([0, 1000], { grid: true, from: 'center', ease: 'out(3)', start: '<<+=250', reversed: true }));
		tl.add('.slide:nth-child(2) p', { scale: [.8, 1] },
			stagger([0, 150], { grid: true, from: 'center', ease: 'out(3)', start: '<<', reversed: true }));
		tl.add('.slide:nth-child(2) p', {
			innerHTML: scrambleText({ text: '&nbsp;', override: false, from: 'center', reversed: true, duration: 500, cursor: '░▒▓' }),
		}, stagger([0, 750], { grid: true, from: 'center', ease: 'out(3)', start: '<+=500' }));

		// 3) Nombre del juego
		tl.set('.slide:nth-child(3)', { opacity: 1 }, '<');
		tl.add('#introTitle', {
			color: { from: C.white, to: C.ice },
			scale: { from: 1.1, to: 1.5 },
			ease: 'inOutExpo',
			duration: 1500,
			innerHTML: scrambleText({ text: NAME, override: false, from: 'center', duration: 1200, cursor: '░▒▓', perturbation: .25 }),
		}, '<<');
		tl.add('#introTitle', { color: { to: C.cyan, duration: 900 } }, '<<+=700');
		tl.add('#introSub', {
			innerHTML: scrambleText({ text: '> acceso concedido', override: false, from: 'left', duration: 900, cursor: '█' }),
		}, '<<+=1000');
		tl.add('#introTitle', { scale: [1.5, 1.62], duration: 1300, ease: 'linear' }, '+=0');
		tl.init();
	} catch (err) {
		// Si algo falla en la intro, se pasa directo al inicio (la página nunca se queda trabada)
		console.warn('Intro no disponible:', err);
		if (window.introFinished) window.introFinished();
	}
})();
