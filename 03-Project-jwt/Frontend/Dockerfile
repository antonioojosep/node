# Usa una imagen oficial de Node.js como base
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación al contenedor
COPY . .

# Construye la aplicación
RUN npm run build

# Expone el puerto en el que corre la aplicación
EXPOSE 5173

# Comando para ejecutar la aplicación
CMD ["npm", "run", "preview"]