// Lógica para la cofiguracion de multer

import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Configuración de multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // carpeta donde se guardaran los archivos
        cb(null, path.join(process.cwd(),'uploads'));
    },
    filename: function (req, file, cb) {
        // nombre del archivo
        cb(null, file.originalname + '-' + Date.now())
      }
});

const upload = multer({ storage });

// Función para subir archivos
export const uploadFile = (req, res) => {
    try {
        if(req.file){
            return res.status(400).send('No se ha seleccionado ningún archivo');
        }
        res.status(200).send('Archivo subido correctamente');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Función para listar archivos
export const listFile = (req, res) => {
    try {
        const files = fs.readdirSync(path.join(process.cwd(),'uploads'));
        res.status(200).json(files);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Función para eliminar archivos
export const deleteFile = (req, res) => {
    try {
        const { filename } = req.params;
        fs.unlinkSync(path.join(process.cwd(),'uploads', filename));
        res.status(200).send('Archivo eliminado correctamente');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { upload };