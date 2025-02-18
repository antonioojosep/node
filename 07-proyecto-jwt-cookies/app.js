import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

const app = express();

// configuracion de express
// cors

const allowOrigin=["http://localhost:5173", "http://localhost:5174"];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowOrigin.includes(origin)) {
            callback(null, origin);
        } else {
            callback(new Error("Origin not allowed"));
        }
    },

    credentials: true, // Para que el navegador permita el envío de cookies
    methods: ["GET", "POST", "PUT", "DELETE"], // Para que el navegador permita el envío de cookies
    allowedHeaders: ["Content-Type", "Authorization"], // Para que el navegador permita el envío de cookies
}))

app.use(express.json());
app.use(cookieParser);

// Conexión con la base de datos
connectDB();

// rutas
app.use("api/auth", authRoutes);
app.use("api/users", userRoutes);

export default app;
