import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (username, password) => {
    let user = await User.findOne({ username });
    if (user) {
        throw new Error('El usuario ya existe');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({ username, password: hashedPassword });
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
        throw new Error('Usuario o contraseña incorrectos');
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token };
};