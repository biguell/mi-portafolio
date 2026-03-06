# Script de actualización TOTAL del Portafolio
# Este script guarda los cambios, sube a GitHub, despliega en GitHub Pages, 
# actualiza el archivo de WhatsApp y el contenedor en Raspi.

Write-Host "--- Iniciando actualización TOTAL del Portafolio ---" -ForegroundColor Cyan

# 1. Guardar cambios en Git
Write-Host "[1/5] Guardando cambios en el código local..." -ForegroundColor Yellow
$fecha = Get-Date -Format "yyyy-MM-dd HH:mm"
git add .
git commit -m "Mejoras Premium y Niveles Técnicos: $fecha"

# 2. Subir a GitHub
Write-Host "[2/5] Sincronizando repositorio en GitHub (biguell/mi-portafolio)..." -ForegroundColor Yellow
git push origin main

# 3. Desplegar en GitHub Pages
Write-Host "[3/5] Publicando versión web en GitHub Pages..." -ForegroundColor Yellow
npm run deploy

# 4. Generar archivo para WhatsApp
Write-Host "[4/5] Generando archivo portafolio_jose_luis.html en el escritorio..." -ForegroundColor Yellow
python bundle_portfolio.py

# 5. Desplegar en Raspi
Write-Host "[5/5] Actualizando servidor Raspi (192.168.2.16:7777)..." -ForegroundColor Yellow
# Comprimimos para el despliegue en Raspi
powershell -Command "Compress-Archive -Path 'Dockerfile', 'docker-compose.yml', 'package.json', 'package-lock.json', 'public', 'src' -DestinationPath 'mi-portafolio.zip' -Force"
powershell -File ".\desplegar-portafolio.ps1"

Write-Host "`n¡TODO ACTUALIZADO CORRECTAMENTE!" -ForegroundColor Green
Write-Host "Web Pública: https://biguell.github.io/mi-portafolio/" -ForegroundColor Blue
Write-Host "Web Raspi:   http://192.168.2.16:7777" -ForegroundColor Blue
Write-Host "WhatsApp:    Archivo actualizado en el Escritorio" -ForegroundColor Blue
