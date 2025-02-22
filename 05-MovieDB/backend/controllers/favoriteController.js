import Favorite from "../models/Favorite.js";
import Movie from "../models/Movie.js";

export const addFavorite = async (req, res) => {
    try {
        const userId = req.params.userId;
        const  movieId = req.body;
        const favorite = await Favorite.create({ userId, movieId });
        res.status(201).json({ mensaje: 'Agregado a favoritos', userId, movieId , favorite});
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al agregar a favoritos' });
    }
}

export const getFavorites = async (req, res) => {
    try {
        const favorites = await Favorite.find({ userId: req.params.userId });
        if (!favorites) {
            return res.status(404).json({ mensaje: 'No hay favoritos' });
        }

        const movieIds = favorites.map(favorite => favorite.movieId);
        const movies = await Movie.find({ id: { $in: movieIds } });

        res.status(201).json(movies);
        
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener favoritos' });
    }
}

export const deleteFavorite = async (req, res) => {
    try {
        const { userId, movieId } = req.params;
        const favorite = await Favorite.findOneAndDelete({ userId, movieId });
        if (!favorite) {
            return res.status(404).json({ mensaje: 'No se ha encontrado el favorito' });
        }
        res.json({ mensaje: 'Favorito eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar favorito' });
    }
}