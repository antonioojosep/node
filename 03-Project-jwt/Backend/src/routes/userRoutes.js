import express from 'express';
import { auth } from '../middleware/authMiddleware.js';

const router = express.Router();

// ruta GET para obtener el perfil de un usuario
// uso un middleware para verificar el token antes de permitir el acceso
router.get('/perfil', auth, (req, res) => {
    res.json({ message: 'Perfil de usuario', userId: req.userId });
});

export default router;