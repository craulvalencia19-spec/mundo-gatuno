# CATS FROST – Página del juego

Página con intro "modo hacker", video del gato, concepto del juego, galaxia con 3 carpetas
(Video, Tráiler, Descargas) y dos modos: **Usuario** (ver y descargar) y **Administrador** (publicar).

## Requisitos
Node.js 18 o superior (https://nodejs.org). No hay que instalar nada más.

## Usar (Windows: doble clic en INICIAR.bat; INICIAR-PUBLICO.bat además crea un enlace para compartir)
1. Abre una terminal en esta carpeta.
2. `npm start`
3. Abre http://localhost:8080
4. Contraseña de administrador: **GATO** (en mayúsculas). Se guarda en `data/config.json`
   (campo `password`) y la puedes cambiar ahí. Para usar otra sin tocar archivos:
   - Windows (PowerShell): `$env:ADMIN_PASSWORD="mi-clave"; npm start`
   - Mac/Linux: `ADMIN_PASSWORD=mi-clave npm start`

Sin servidor (Live Preview): el botón Administrador también pide la contraseña (GATO) y entra en modo vista previa;
solo sirve para ver el diseño: lo que pruebes ahí no se publica.

## Tráiler incluido
El tráiler (`public/assets/trailer.mp4`, 640×360, 2:32) ya viene dentro del proyecto y aparece solo en la carpeta Tráiler,
sin GitHub ni subidas. Para cambiarlo, reemplaza ese archivo (mismo nombre) o edita `builtinTrailer` en `public/content.js`.

## Publicar (admin) – subir el APK
1. Doble clic en INICIAR.bat y abre http://localhost:8080
2. Administrador → clave GATO → Ir a descargar el juego → carpeta **Descargas**.
3. Arrastra el APK al recuadro "Subir el APK del juego" (o haz clic para elegirlo). Listo: los usuarios ven el botón Descargar.

## Publicar (admin) – detalles
Entra como Administrador → Ir a descargar el juego → abre la carpeta → sube el video del tráiler
(.mp4/.webm), videos, o el APK (cualquier archivo) en Descargas. Los usuarios solo ven y descargan.
Los archivos quedan en `data/` (haz copia de esa carpeta).

## Compartir con otras personas
La subida necesita este servidor Node en marcha; Live Server / Live Preview solos NO guardan archivos
(la página igual abre, pero en modo vista previa local).
- Prueba rápida: `npx cloudflared tunnel --url http://localhost:8080` (o ngrok) y comparte el enlace.
- Definitivo: un hosting con Node y disco persistente (VPS, Railway/Render con volumen, etc.).
  Usa HTTPS, define `ADMIN_PASSWORD`, `DATA_DIR` (carpeta persistente) y `TRUST_PROXY=1` si hay proxy.
- Variables: `PORT` (8080), `MAX_UPLOAD_MB` (2048), `DATA_DIR`, `ADMIN_PASSWORD`, `TRUST_PROXY`.

## Editar textos
`public/content.js`: nombre, conceptos del juego, palabras de la intro y carpetas.

## Que todos vean lo que subes (link público)
1. Doble clic en **INICIAR-PUBLICO.bat** (necesita Node.js). Aparece un enlace `https://….trycloudflare.com` (también queda en ENLACE.txt y copiado al portapapeles): ese es el que compartes.
2. Tú, como administrador, entra por **http://localhost:8080** (clave GATO) y sube el video / APK. Lo ven todos los que entren por el enlace.
3. La PC debe seguir encendida con la ventana abierta; el enlace cambia cada vez que lo inicias.
La página de GitHub Pages NO recibe archivos: usa siempre este modo.

## Sin servidor (Live Server, puerto 3000, etc.)
El administrador elige el video o el APK y pulsa **Guardar**. Se guarda en ese navegador de ese computador (sin límite práctico de tamaño).
Para que lo vean todos los usuarios, usa INICIAR.bat (servidor): ahí lo que subas queda publicado para todos.

## Importante al copiar o comprimir el proyecto
Los videos/APK que subes como administrador se guardan en la carpeta `data/` (no en `public/`).
Si pasas el proyecto en un zip sin `data/`, esos archivos se pierden. Haz copia de `data/` junto con el resto.
El tráiler y el video del gato ya están dentro de `public/assets/` (trailer.mp4 y fondo.mp4), así que siempre aparecen.
