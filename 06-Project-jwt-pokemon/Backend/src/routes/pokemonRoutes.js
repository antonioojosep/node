import express from 'express';
import Pokemon from '../models/Pokemon.js';

const router = express.Router();

// ruta GET para obtener la lista de pokemones
router.get('/', async (req, res) => {
    try {
        const pokemons = await Pokemon.find();
        res.json(pokemons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;