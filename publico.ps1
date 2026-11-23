# Cats Frost - servidor + enlace publico (para que todos vean lo que subes)
$ErrorActionPreference = 'Stop'
Set-Location -Path $PSScriptRoot
$Host.UI.RawUI.WindowTitle = 'Cats Frost PUBLICO'

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host 'Falta instalar Node.js (version LTS): https://nodejs.org' -ForegroundColor Yellow
  Start-Process 'https://nodejs.org'
  Read-Host 'Instalalo y vuelve a abrir este archivo. Enter para salir'
  exit
}

Write-Host 'Iniciando el servidor...' -ForegroundColor Cyan
$server = Start-Process -FilePath 'node' -ArgumentList 'server.js' -WindowStyle Minimized -PassThru
Start-Sleep -Seconds 2

$log = Join-Path $env:TEMP 'catsfrost-tunnel.log'
if (Test-Path $log) { Remove-Item $log -Force }
Write-Host 'Creando el enlace publico (la primera vez puede tardar un minuto)...' -ForegroundColor Cyan
$tunnel = Start-Process -FilePath 'cmd.exe' -ArgumentList "/c npx --yes cloudflared tunnel --url http://localhost:8080 > `"$log`" 2>&1" -WindowStyle Minimized -PassThru

$url = $null
for ($i = 0; $i -lt 120 -and -not $url; $i++) {
  Start-Sleep -Seconds 1
  if (Test-Path $log) {
    $m = Select-String -Path $log -Pattern 'https://[a-z0-9-]+\.trycloudflare\.com' -ErrorAction SilentlyContinue | Select-Object -First 1
    if ($m) { $url = $m.Matches[0].Value }
  }
}

Write-Host ''
if ($url) {
  Set-Content -Path (Join-Path $PSScriptRoot 'ENLACE.txt') -Value $url
  try { Set-Clipboard -Value $url } catch {}
  Write-Host '=====================================================' -ForegroundColor Green
  Write-Host ' ENLACE PARA COMPARTIR (ya copiado al portapapeles):' -ForegroundColor Green
  Write-Host "   $url" -ForegroundColor White
  Write-Host '=====================================================' -ForegroundColor Green
} else {
  Write-Host 'No se pudo crear el enlace publico. Revisa tu internet y vuelve a intentarlo.' -ForegroundColor Red
}
Write-Host ''
Write-Host 'ADMINISTRADOR: sube el video y el APK desde http://localhost:8080 (clave: GATO).'
Write-Host 'Lo que subas lo veran todos los que entren por el enlace.'
Write-Host 'Deja esta ventana abierta y la PC encendida mientras quieras que la pagina funcione.'
Start-Process 'http://localhost:8080'
Write-Host ''
Read-Host 'Pulsa Enter aqui para APAGAR todo'
foreach ($p in @($tunnel, $server)) { try { Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue } catch {} }
Get-Process cloudflared -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
