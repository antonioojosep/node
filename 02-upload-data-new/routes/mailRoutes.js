import { Router } from "express";
import { sendEmail } from "../controllers/mailController.js";

const router = Router();

// Ruta para enviar mail
router.get("/", sendEmail);

export default router;
