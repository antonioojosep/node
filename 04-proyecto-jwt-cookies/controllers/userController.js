import User from "../models/User.js"

// Controlador para añadir usuarios (protegido)
const addUser = async (req, res)=> {
    try {
        const { username, password } = req.body;
        // Creamos y guardamos el usuario:
        const user = new User({ username, password });
        await user.save();
        res.status(201).json({ message: "Usuario añadido" });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el usuario",error })
    }
}

// Controlador para obtener el perfil del usuario autenticado
const getUserProfile = async(req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" })
        }
        res.json({ id: user._id, username: user.username  });
    } catch (error) {
        req.status(500).json({ message: "Error al obtener el usuario", error })
    }
}