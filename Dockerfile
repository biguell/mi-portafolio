# Etapa 1: Construcción
FROM node:18-alpine as build

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:stable-alpine

# Copiar los archivos construidos a la carpeta de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto 80 dentro del contenedor
EXPOSE 80

# Ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
