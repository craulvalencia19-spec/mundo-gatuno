/* Contenido de la web. Edita aquí los textos: nombre del juego, conceptos, carpetas. */
window.CONTENT = {
	name: 'CATS FROST',
	tagline: 'Año 2200. La Tierra se congela y un gato llamado Spark es su última esperanza.',
	lead: 'La Tierra se aleja del Sol y la humanidad se apaga entre la nieve. Un científico duerme a su gato Spark en una cápsula de estasis y le deja un collar con una gema azul. Cien años después, Spark despierta en un mundo helado y sin humanos... y empieza su viaje en este juego de aventura 2D.',

	// Palabras que aparecen en la intro (14)
	keywords: [
		'Año 2200', 'Nieve', 'Spark', 'Gema azul', '2D', 'Estasis', 'Hielo',
		'Hologramas', 'Valentía', 'Aliados', 'Tiempo', 'Esperanza', 'Frío', 'Leyenda',
	],

	// Historia / conceptos (tarjetas de la pantalla de inicio)
	concepts: [
		{ icon: '🌍', title: 'Año 2200', text: 'La Tierra se aleja del Sol por un fenómeno descubierto demasiado tarde. Sin calor, la nieve lo cubre todo.' },
		{ icon: '🧊', title: 'Cápsula de estasis', text: 'Un científico logra estabilizar el planeta, pero tardará siglos en volver a su órbita. Antes, pone a salvo a su gato Spark.' },
		{ icon: '💎', title: 'La gema azul', text: 'El collar de Spark guarda tecnología avanzada: proyecta hologramas de su dueño y lo guía por el camino.' },
		{ icon: '⏳', title: 'La máquina del tiempo', text: 'El último intento de la humanidad espera en un lugar secreto. La gema es la llave para activarla.' },
		{ icon: '🤝', title: 'Aliados en el camino', text: 'Spark no está solo: encontrará compañeros que lo ayudarán a cruzar tormentas, cuevas y ruinas heladas.' },
		{ icon: '🎮', title: 'Aventura 2D', text: 'Plataformas, exploración y puzles de hielo en un mundo nevado, ahora más suave, pero aún helado.' },
	],

	// Almacenamiento en la nube para archivos pesados (URL pública del bucket de Cloudflare R2). Se llena una vez.
	cloud: { publicUrl: '' },

	// Firebase (Storage + Auth): pega aquí el objeto firebaseConfig de tu proyecto. Si lo dejas vacío, no se usa.
	firebase: {
		apiKey: '',
		authDomain: '',
		projectId: '',
		storageBucket: '',
		messagingSenderId: '',
		appId: '',
	},

	// Las 3 carpetas de la galaxia
	folders: [
		{ id: 'videos', name: 'Video', sub: 'El gato del TikTok', glyph: '▶' },
		{ id: 'trailer', name: 'Tráiler', sub: 'Tráiler oficial', glyph: '★' },
		{ id: 'descargas', name: 'Descargas', sub: 'APK y archivos', glyph: '⬇' },
	],

	// Video que viene incluido (carpeta "Video")
	builtinVideo: { id: 'builtin-gato', name: 'Gato en la masa (TikTok)', url: 'assets/fondo.mp4' },

	// Tráiler que viene incluido en el proyecto (carpeta "Tráiler"): no depende de GitHub ni de la nube
	builtinTrailer: { id: 'builtin-trailer', name: 'Tráiler oficial – Cats Frost', url: 'assets/trailer.mp4' },

	// Imágenes de la galería (pantalla de inicio)
	gallery: [
		{ thumb: 'assets/gato-lentes-thumb.jpg', full: 'assets/gato-lentes.jpg', caption: 'Gato con lentes' },
		{ thumb: 'assets/gatos-espacio-thumb.jpg', full: 'assets/gatos-espacio.jpg', caption: 'Gatos en el espacio' },
		{ thumb: 'assets/gato-colina-thumb.jpg', full: 'assets/gato-colina.jpg', caption: 'Gato en la colina' },
	],
};
