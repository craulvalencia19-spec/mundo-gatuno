@echo off
title Cats Frost
where node >nul 2>nul
if errorlevel 1 (
  echo Falta instalar Node.js: https://nodejs.org  ^(version LTS^)
  start https://nodejs.org
  pause
  exit /b
)
echo Iniciando Cats Frost... deja esta ventana abierta.
echo Contrasena de administrador: GATO
start "" /min cmd /c "timeout /t 2 >nul & start http://localhost:8080"
node server.js
pause
