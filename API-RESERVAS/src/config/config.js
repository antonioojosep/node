// configuraciones necesarias del proyecto.
import dotenv from 'dotenv';

dotenv.config(); // carga las variables de entorno del archivo .env en proccess.env

export const PORT = process.env.PORT || 3000;
export const DATABASE_PATH = process.env.DATABASE_PATH || './database/hotel.sqlite';