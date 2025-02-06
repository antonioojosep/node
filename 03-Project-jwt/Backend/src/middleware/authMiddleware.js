import jwt from 'jsonwebtoken';

// Creamos el middleware para proteger las rutas
export const auth = (req, res, next) => {
    try {
        // Extraemos el Bearer del token
        // Buscando la cadena Authorization en el header
        const token = req.header('Authorization').replace('Bearer ', '');
        // Verificar el token
        if (!token) {
            res.status(401).json({ message: 'Token no proporcionado' });
        }
        // Verificamos y decodificamos el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Añadimos el id del usuario al objeto request
        req.userId = decoded.userId;
        // Continuamos con el siguiente middleware
        next();
    } catch (error) {
        res.status(401).json({ message: 'Debes estar autenticado para acceder a esta ruta' });
    }
};