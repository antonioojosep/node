import sqlite3 from 'sqlite3';

import { DATABASE_PATH } from "../config/config.js";

const db = new sqlite3.Database(DATABASE_PATH, err => {
    if (err) {
     console.error("Error al abrir");  
    }else {
        console.log("Conexión establecida a la base de datos");
    }

    // <--- Me he conectado a la base de datos

db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS clientes(
            id INTEGER PRIMARY KEY  AUTOINCREMENT,
            nombre TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE
        )`
    )
    db.run(
        `CREATE TABLE IF NOT EXISTS reservas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cliente_id INTEGER NOT NULL,
            fecha_entrada TEXT NOT NULL,
            fecha_salida TEXT NOT NULL,
            FOREIGN KEY (cliente_id) REFERENCES clientes(id)
        )`
    )
})
})

export default db;