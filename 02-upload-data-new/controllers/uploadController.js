// controllers/uploadController.js
import fs from "fs";
import { console } from "inspector";
import multer from "multer";
import path from "path";

// Configuración de Multer: almacenamiento y nombres de archivo
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Carpeta donde se guardarán los archivos subidos
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename: (req, file, cb) => {
    // Guardamos el archivo con un nombre único basado en la fecha y el nombre original
    // cb(null, `${Date.now()}-${file.originalname}`);
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage });

// Controlador para subir archivo
export const uploadFile = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No se ha subido ningún archivo");
    }
    res.send(`Archivo subido con éxito: ${req.file.filename}`);
  } catch (error) {
    res.status(500).send("Error al subir archivo");
  }
};

// Controlador para listar los archivos subidos
export const listFiles = (req, res) => {
  const uploadDir = path.join(process.cwd(), "uploads");
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).send("Error al listar archivos");
    }
    let size = 0
    for (const file of files) {
      size += fs.statSync(path.join(uploadDir, file), (err) => {
        if (err) {
          return res.status(500).send("Error al obtener tamaño")
        }
      }).size
    }
    res.json({
      files: files,
      size: (size / 1024 / 1024).toFixed(2) // Tamaño en MB
    }); // Devolvemos los nombres de los archivos en formato JSON
  });
};

// Controlador para listar los archivos reciclados
export const listRecicledFiles = (req, res) => {
  const uploadDir = path.join(process.cwd(), "recicled");
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).send("Error al listar archivos");
    }
    let size = 0
    for (const file of files) {
      size += fs.statSync(path.join(uploadDir, file), (err) => {
        if (err) {
          return res.status(500).send("Error al obtener tamaño")
        }
      }).size
    }
    res.json({
      files: files,
      size: (size / 1024 / 1024).toFixed(2) // Tamaño en MB
    }); // Devolvemos los nombres de los archivos en formato JSON
    
  });
};

// Controlador para eliminar un archivo
export const deleteFile = (req, res) => {
  const fileName = req.params.fileName; // Nombre del archivo a eliminar
  const filePath = path.join(process.cwd(), "uploads", fileName);
  const recicleDir = path.join(process.cwd(), "recicled", fileName);

  fs.rename(filePath,recicleDir, (err) => {
    if (err) {
      return res.status(500).send(`Error al eliminar archivo: ${fileName} : ${err}`)
    }
    res.send(`Archivo ${fileName} eliminado con éxito`);
  })
};

// Controlador para eliminar papelera de reciclaje
export const voidRecicled = (req, res) => {

  const filePath = path.join(process.cwd(), "recicled");

  if (fs.existsSync(filePath)) {
    fs.rm(filePath, { recursive: true }, (err) => {
        if (err) {
          return res.status(500).send('Error eliminando:', err);
        } else {
          fs.mkdirSync(filePath, { recursive: true });
          console.log(`Carpeta "${filePath}" creada exitosamente.`);
          res.json("bien")
        }
    });
} else {
    res.status(500).send('La carpeta no existe');
}
}
