import User from "../models/User.js";

export const addUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.create({ username, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el usuario' });
    }
}

export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        res.json({ user: user._id, username: user.username });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener el perfil del usuario' });
    }
}