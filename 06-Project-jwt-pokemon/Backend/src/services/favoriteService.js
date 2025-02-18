import User from "../models/User.js";

export const addFavorite = async (userId, pokemonId) => {
    const user = await User.findByIdAndUpdate(userId, { $push: { favorites: pokemonId } }, { new: true });
    if (!user) {
        throw new Error('No se encontró el usuario');
    }
};

export const getFavorites = async (userId) => {
    const user = await User.findById(userId).populate('favorites');
    if (!user) {
        throw new Error('No se encontró el usuario');
    }
    return user.favorites;
}

export const removeFavorite = async (userId, pokemonId) => {
    const user = await User.findByIdAndUpdate(userId, { $pull: { favorites: pokemonId } }, { new: true });
    if (!user) {
        throw new Error('No se encontró el usuario');
    }
}