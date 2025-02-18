import jwt from "jsonwebtoken";

// middleware para verificar el token
const authMiddleware = async (req, res, next) => {
    try {
        // Extraemos el token de la cookie
        const token = req.cookies.token;
        if (!token) {
            return res.status(403).json({ message: "Acceso denegado" });
        }
        // Verificamos el token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        // Añadir el id del usuario a la request
        req.userId = verified.userId;
        next();
    } catch (error) {
        res.status(401).json({ message: "Token inválido o expirado" });
    }
};

export default authMiddleware;