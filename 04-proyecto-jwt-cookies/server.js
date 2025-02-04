// aqui se levanta el servidor
import app from "./app";
import dotenv from "dotenv";

dotenv.config()

const PORT = process.env.PORT || 3000;
const URL = process.env.URL;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${URL}:${PORT}`)
})