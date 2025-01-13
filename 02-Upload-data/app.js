// import necesarios
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';


const app = express(); // Crear la instancia de express

// Para obtener la ruta del fichero actual
const __filename = fileURLToPath(import.meta.url); // Obtener la ruta del fichero actual
const __dirname = path.dirname(__filename); // Obtener el directorio del fichero actual

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public'))); // Establecer la carpeta public como carpeta estática

// Asociar la carpeta para la subida de archivos en el endpoint /uploads/files
app.use('/uploads/files');

// Configurar el puerto
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});