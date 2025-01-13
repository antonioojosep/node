// Aqui vamos a gestionar todas las rutas que pemitan subir archivos al servidor
// Usando controllers/uploadController.js
import { Router } from 'express';
import { uploadFile, listFile, deleteFile } from '../controllers/uploadController.js';

const router = Router();

// Ruta para subir archivos

router.post('/',uploadFile);

// Ruta para listar archivos

router.get('/',listFile);

// Ruta para eliminar archivos

router.delete('/:filename',deleteFile);

// Ruta para descargar archivos

export default router;