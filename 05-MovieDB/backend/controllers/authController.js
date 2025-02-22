import User from "../models/User.js";
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({username});
        if (!user || !(await user.comparePassword(password))) {
            return res.status(404).json({ mensaje: 'Usuario o contraseña incorrecta' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
            maxAge: 3600000, // 1 hora
            sameSite: "strict"
        });
        res.json({ mensaje: 'Login exitoso' });
    }
    catch (error) {
        res.status(500).json({ mensaje: 'Error al hacer login'});
    }
}

export const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (await User.findOne({ username })) {
            return res.status(400).json({ mensaje: 'El nombre de usuario ya existe' });
        }
        // Opcion 1 "puede fallar"
        const user = await User.create({ username, password });
        // Opcion 2
        // const user = new User({ username, password });
        // await user.save();
        res.status(201).json({ mensaje: 'Usuario creado' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el usuario' });
    }
}

export const logout = (req, res) => {
    //Opcion 1 "puede fallar"
    res.clearCookie('token');
    // Opcion 2
    /** 
     * res.cookie('token', '', {
     * httpOnly: true,
     * secure: process.env.NODE_ENV === 'production',
     * expires: new Date(0),
     * maxAge: 0,
    */
    res.json({ mensaje: 'Logout exitoso' });
}