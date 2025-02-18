import dotenv from "dotenv";
import mongoose from "mongoose";

// aqui gestiono conexion con la base de datos MONGODB

// uso variables de entorno
dotenv.config();

// funcion para conectar con la base de datos
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
        });

        console.log("Conexion a MONGODB exitosa")
    } catch (error) {
        console.error("Error con la conexion a la bd", error);
        process.exit(1);
    }
}

export default connectDB();