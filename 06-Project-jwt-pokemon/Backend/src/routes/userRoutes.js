import express from 'express';
import { auth } from '../middleware/authMiddleware.js';
import { addFavorite, getFavorites, removeFavorite } from '../services/favoriteService.js';

const router = express.Router();

// ruta GET para obtener el perfil de un usuario
// uso un middleware para verificar el token antes de permitir el acceso
router.get('/perfil', auth, (req, res) => {
    res.json({ message: 'Perfil de usuario', userId: req.userId });
});

router.get('/favorites', getFavorites, (req, res) => {
    res.json({ message: 'Favoritos del usuario', userId: req.userId });
});

// ruta POST para agregar un pokemon a favoritos
router.post('/favorites/:userId', addFavorite, (req, res) => {
    res.json({ message: 'Agregado a favoritos', userId: req.params.userId, pokemonId: req.pokemonId });
});

router.delete('/favorites/:userId', removeFavorite, (req, res) => {
    res.json({ message: 'Eliminado de favoritos', userId: req.params.userId, pokemonId: req.params.pokemonId });
});

export default router;