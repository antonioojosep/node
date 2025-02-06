// Imports
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
//import userRoutes from './routes/userRoutes.js'
import { connectDB } from './config/database.js';

// Cargar las variables de entorno
dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexion a la base de datos
connectDB();

// Rutas
app.use('/auth', authRoutes);
//app.use('/user', userRoutes);

// Gestionar los errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  // devolver un mensaje de error
  res.status(500).json({ mensaje: err.message} || "Error interno del servidor");
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});