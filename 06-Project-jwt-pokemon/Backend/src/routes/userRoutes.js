import express from 'express';
import { auth } from '../middleware/authMiddleware.js';
import { addFavorite, getFavorites, removeFavorite } from '../services/favoriteService.js';

const router = express.Router();

// ruta GET para obtener el perfil de un usuario
// uso un middleware para verificar el token antes de permitir el acceso
router.get('/perfil', auth, (req, res) => {
    res.json({ message: 'Perfil de usuario', userId: req.userId });
});

router.get('/favorites', auth, async (req, res) => {
    try {
        const favorites = await getFavorites(req.userId);
        res.json(favorites);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ruta POST para agregar un pokemon a favoritos
router.post('/favorites/:userId', auth, async (req, res) => {
    try {
        const { pokemonId } = req.body;
        await addFavorite(req.params.userId, pokemonId);
        res.json({ message: 'Agregado a favoritos'});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/favorites/:userId', auth, async (req, res) => {
    try {
        const { pokemonId } = req.body;
        await removeFavorite(req.params.userId, pokemonId);
        res.json({ message: 'Eliminado de favoritos'});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;