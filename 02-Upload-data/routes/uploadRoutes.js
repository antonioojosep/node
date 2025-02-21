// routes/uploadRoutes.js
import { Router } from "express";
import {
  upload,
  uploadFile,
  listFiles,
  deleteFile,
  listRecicledFiles,
  voidRecicled,
} from "../controllers/uploadController.js";

const router = Router();

// Ruta para subir archivo
router.post("/", upload.single("file"), uploadFile);

// Ruta para listar archivos reciclados
router.get("/recicled", listRecicledFiles)

// Ruta para listar los archivos subidos
router.get("/", listFiles);

// Ruta para reciclar un archivo
router.post("/:fileName", deleteFile);

// Ruta para eliminar un archivo
router.delete("/recicled", voidRecicled);

export default router;
