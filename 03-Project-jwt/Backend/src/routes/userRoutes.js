import express from 'express';
import { auth } from '../middleware/authMiddleware';

const router = express.Router();

// ruta GET para obtener el perfil de un usuario
// uso un middleware para verificar el token antes de permitir el acceso
router.get('/perfil',auth,)

export default router;