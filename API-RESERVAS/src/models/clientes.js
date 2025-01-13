// Todo lo que introduzcamos en models
// sera lo encargado en gestionar la relacion con la db

import db from "./database.js";

export const createCliente = (nombre, email, callback) => {
    // insercion en la db de un cliente.
    const sql = `INSERT INTO clientes(nombre,email) VALUES (?,?)`;
    const params = {nombre, email};
    db.run(sql, params, function (err){
        callback(err, {id:this.lastID});
    })
};

export const getAllClientes = (callback) => {
    const sql = `SELECT * FROM clientes`;
    db.all(sql,[], function (err, rows){
        callback(err, rows);
    });
}

export const getClientById = (id, callback) => {
    const sql = `SELECT * FROM clientes WHERE id =?`;
    db.get(sql, [id], function (err,rows){
        callback(err,rows);
    });
};

export const deleteClientById = (id, callback) => {
    const sql = `DELETE FROM clientes WHERE id =?`;
    db.run(sql, id, function (err,rows){
        callback(err,{changes:this.changes});
    });
};

export const updateClient = (id,nombre,email,callback) => {
    const sql = `UPDATE clientes SET nombre=?, email=? WHERE id =?`;
    const params = {nombre,email,id};
    db.run(sql, params ,id ,params, function (err) {
        callback(err,{changes:this.changes});
    });
}