// Aquí gestiono la conexión con la base de datos MONGODB
import dotenv from "dotenv";
import mongoose from "mongoose";
// Uso variables entorno.
dotenv.config();

// Función para conectar con la base de datos
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Conexión a MONGODB exitosa");
    }catch{
        console.error("Error al conectar a la base de datos");
        process.exit(1);
    }
}

export default connectDB;