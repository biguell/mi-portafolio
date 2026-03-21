# Script de despliegue para el Portafolio en Rambo (192.168.2.35)
# Este script sube el código, lo descomprime y lanza el contenedor en el puerto 6666

$RASPI_IP = "192.168.2.35"
$RASPI_USER = "yambo"
$SSH_PORT = "22"
$REMOTE_PATH = "/home/yambo/mi-portafolio"

Write-Host "--- Iniciando Despliegue del Portafolio en Raspi (SSH Port: $SSH_PORT) ---" -ForegroundColor Cyan

# 1. Crear directorio remoto si no existe
Write-Host "Preparando directorio remoto..."
ssh -p $SSH_PORT "$RASPI_USER@$RASPI_IP" "mkdir -p $REMOTE_PATH"

# 2. Subir el archivo ZIP
Write-Host "Subiendo el paquete..."
scp -P $SSH_PORT "mi-portafolio.zip" "${RASPI_USER}@${RASPI_IP}:${REMOTE_PATH}/mi-portafolio.zip"

# 3. Descomprimir, dar permisos y levantar con Docker Compose
Write-Host "Desplegando con Docker Compose..."
$deployCommand = "cd $REMOTE_PATH; unzip -o mi-portafolio.zip; chmod -R 755 .; rm mi-portafolio.zip; sudo docker compose down --remove-orphans; sudo docker compose up -d --build"

ssh -p $SSH_PORT "$RASPI_USER@$RASPI_IP" $deployCommand

Write-Host "--- Despliegue Completado ---" -ForegroundColor Green
Write-Host "Accede a tu portafolio en: http://${RASPI_IP}:7777" -ForegroundColor Yellow
