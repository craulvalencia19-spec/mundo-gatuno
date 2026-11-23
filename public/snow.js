/* Nevada suave (capas con profundidad), liviana: se pausa si la pestaña no se ve o en la intro */
(() => {
	'use strict';
	const cv = document.getElementById('snow');
	const ctx = cv && cv.getContext('2d');
	if (!ctx) return;
	const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
	const dpr = 1;
	let w = 0, h = 0, flakes = [], raf = 0, last = 0;

	const make = (rand) => {
		const z = Math.random();               // 0 = lejos, 1 = cerca
		return {
			x: Math.random() * w,
			y: rand ? Math.random() * h : -10,
			r: 0.8 + z * 2.6,
			v: 18 + z * 70,
			a: 0.35 + z * 0.55,
			p: Math.random() * 6.28,
			s: 0.4 + Math.random() * 0.9,
		};
	};
	const resize = () => {
		w = cv.width = Math.floor(innerWidth * dpr);
		h = cv.height = Math.floor(innerHeight * dpr);
		const n = Math.min(reduce ? 40 : 160, Math.floor((w * h) / 14000));
		flakes = Array.from({ length: n }, () => make(true));
	};
	resize();
	addEventListener('resize', resize);

	const frame = (t) => {
		raf = requestAnimationFrame(frame);
		const dt = Math.min(0.05, (t - last) / 1000 || 0.016);
		last = t;
		if (document.body.dataset.screen === 'intro') { ctx.clearRect(0, 0, w, h); return; }
		ctx.clearRect(0, 0, w, h);
		const wind = Math.sin(t / 4000) * 14;
		for (const f of flakes) {
			f.y += f.v * dt;
			f.x += (wind + Math.sin(t / 1000 * f.s + f.p) * 12) * dt * (0.4 + f.r / 3);
			if (f.y > h + 10 || f.x < -20 || f.x > w + 20) { Object.assign(f, make(false)); if (f.x < 0 || f.x > w) f.x = Math.random() * w; continue; }
			ctx.globalAlpha = f.a;
			ctx.fillStyle = '#eaf6ff';
			ctx.beginPath();
			ctx.arc(f.x, f.y, f.r, 0, 6.283);
			ctx.fill();
		}
		ctx.globalAlpha = 1;
	};
	const start = () => { if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); } };
	document.addEventListener('visibilitychange', () => {
		if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else start();
	});
	start();
})();
