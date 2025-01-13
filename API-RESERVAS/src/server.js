import express from 'express';
import { PORT } from './config/config.js';
import clientesRoutes from './routes/clientesRoutes.js'


// Create an express application
const app = express();

// Indico el tipo de dati que voy a recibir
app.use(express.json());

// rutas
app.use("/api/clientes", clientesRoutes);
//app.use("/api/reservas", reservasRoutes);

// Inicia el server

app.listen(PORT, () => {
    console.log(`El server está escuchando en la url: http://localhost:${PORT}`);
});