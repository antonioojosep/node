import express from 'express';
import { authRegister, authLogin } from '../controllers/authController.js';

const router = express.Router();

// ruta POST pra registrar un usuario
router.post('/register', authRegister);

// ruta POST para login de usuarios
router.post('/login', authLogin);

export default router;