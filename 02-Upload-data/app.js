// app.js
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import uploadRoutes from "./routes/uploadRoutes.js";
import mailRoutes from "./routes/mailRoutes.js";

const app = express();

// Obtener la ruta absoluta de la carpeta actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


  // Ruta de la carpeta "uploads"
const uploadsDir = path.join(__dirname, "uploads");
const recicledDir = path.join(__dirname, "recicled")

// Verificar si la carpeta "uploads" existe, si no, crearla
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log(`Carpeta "${uploadsDir}" creada exitosamente.`);
} else {
  console.log(`Carpeta "${uploadsDir}" ya existe.`);
}

// Verificar si la carpeta "recicled" existe, si no, crearla
if (!fs.existsSync(recicledDir)) {
  fs.mkdirSync(recicledDir, { recursive: true });
  console.log(`Carpeta "${recicledDir}" creada exitosamente.`);
} else {
  console.log(`Carpeta "${recicledDir}" ya existe.`);
}

// Servir archivos estáticos (como el HTML)
app.use(express.static(path.join(__dirname, "public")));

// Usar las rutas para manejar uploads/files
app.use("/uploads", uploadRoutes);
app.use("/mail", mailRoutes);

// Configuramos el puerto donde va a escuchar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
