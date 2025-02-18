import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const register = async (username, password) => {
    let user = await User.findOne({ username });
    if (user) {
        throw new Error('El usuario ya existe');
    }

    // No necesitamos hacer hash aquí porque ya se hace en el modelo
    user = new User({ username, password });
    await user.save();

    return { msg: 'Usuario registrado' };
};

export const login = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('Usuario o contraseña incorrectos');
    }

    const validPassword = await user.comparePassword(password);
    if (!validPassword) {
        throw new Error('Contraseña incorrecta');
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, userId: user._id };
};