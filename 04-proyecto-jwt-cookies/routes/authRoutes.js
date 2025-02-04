import express from "express";

const router = express.Router();
// Rutas de autenticacion
//  /login /register /logout

router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);

// Aqui hay que añadir las rutas que faltan
export default router;