import express from "express";
import cors from "cors";
import cookieParser from "cookieParser";
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import connectDB from "./config/db.js"

const app = express();
//configuracion de express
// cors:
const allowOrigins = ["http://localhost:5173", "http://localhost:5174"];

app.use(cors()); //<-Modificar ***************
app.use(express.json());
app.use(cookieParser())

// Conexiones con la base de datos
connectDB();

// rutas
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

export default app;
