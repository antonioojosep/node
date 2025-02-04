export const corsOptions = {
    origin: process.env.FRONTEND_URL, // URL permitidas
    methods: ['GET','POST','PUT','DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeceras permitidas
    credentials: true, // Permite envio de cookies y headers en la autenticación
};