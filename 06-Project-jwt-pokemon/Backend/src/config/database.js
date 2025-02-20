import mongose from 'mongoose';
import { savePokemons } from '../controllers/pokemonController.js';

// Funcion asincrona para conectar a la base de datos de MongoDB
export const connectDB = async () => {
    try {
        // Conectar a la base de datos
        await mongose.connect(process.env.MONGODB_URI);
        await savePokemons();
        console.log("Conectado a la base de datos de MongoDB");
    } catch (error) {
        console.log("Error al conectar a la base de datos", error.message);
        process.exit(1); // Detener la aplicación con código de error distinto de 0
    }
};