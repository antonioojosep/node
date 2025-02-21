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

// ruta GET para obtener un pokemon por nombre
router.get('/search', async (req, res) => {
    try {
        const { name } = req.query;
        if (!name) {
            return res.status(400).json({ message: 'El parámetro name es requerido' });
        }
        
        // Usando una expresión regular para búsqueda insensible a mayúsculas/minúsculas
        const pokemon = await Pokemon.find({ 
            name: { $regex: name, $options: 'i' } 
        });
        
        if (pokemon.length === 0) {
            return res.status(404).json({ message: 'No se encontraron pokémon con ese nombre' });
        }
        
        res.json(pokemon);
    } catch (error) {
        console.error('Error en la búsqueda:', error);
        res.status(500).json({ message: error.message });
    }
});

// ruta GET para obtener un pokemon por id
router.get('/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.params.id);
        res.json(pokemon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export default router;