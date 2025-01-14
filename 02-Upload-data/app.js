// import necesarios
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import uploadRouter from './routes/uploadRoutes.js';
import fs from 'fs';


const app = express(); // Crear la instancia de express

// Para obtener la ruta del fichero actual
const __filename = fileURLToPath(import.meta.url); // Obtener la ruta del fichero actual
const __dirname = path.dirname(__filename); // Obtener el directorio del fichero actual

// Ruta de la carpeta uploads
const uploadDir = path.join(__dirname, 'uploads');

// Comprobar si la carpeta uploads existe y si no la crea
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
    console.log(`Carpeta ${uploadDir} creada`);
}else{
    console.log(`La carpeta ${uploadDir} ya existe`);
}

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public'))); // Establecer la carpeta public como carpeta estática

// Asociar la carpeta para la subida de archivos en el endpoint /uploads/files
app.use('/uploads/files', uploadRouter);

// Configurar el puerto
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});