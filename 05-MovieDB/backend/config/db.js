import mongoose from "mongoose";
import { saveMovies } from "../controllers/movieController.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexion a MONGODB exitosa');
        await saveMovies();
        await saveMovies();
    } catch (error) {
        console.log('Error en la conexion a MONGODB');
        process.exit(1);
    }
}