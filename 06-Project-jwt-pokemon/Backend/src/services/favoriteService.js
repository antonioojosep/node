import mongoose from "mongoose";
import User from "../models/User.js";

export const addFavorite = async (userId, pokemonId) => {
    if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(pokemonId)) {
        throw new Error("IDs inválidos");
    }
    const user = await User.findByIdAndUpdate(
        userId,
        { $addToSet: { favorites: new mongoose.Types.ObjectId(pokemonId) } },
        { new: true }
    );
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