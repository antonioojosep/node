import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { corsOptions } from './config/cors.js';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import favoriteRoutes from './routes/favoriteRoutes.js';
import commentRoutes from './routes/commentRoutes.js';

dotenv.config();
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Conexion a la base de datos
connectDB();

// Rutas

app.use('/auth', authRoutes);
app.use('/movies', movieRoutes);
app.use('/favorites', favoriteRoutes);
app.use('/comments', commentRoutes);


// Gestionar los errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    // devolver un mensaje de error
    res.status(500).json({ mensaje: err.message} || "Error interno del servidor");
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server iniciado en el puerto ${PORT}`);
});