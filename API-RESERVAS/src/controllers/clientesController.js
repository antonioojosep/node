import { createCliente, getAllClientes } from "../models/clientes.js"

export const getClientsHandler = (req,res) => {

}

export const getAllClientsHandler = (req,res) => {
    // llamar a la funcion en SQLITE3 que se traiga a los clientes (SELECT * FROM)
    getAllClientes((err,rows) => {
        if (err) {
            res.status(500).json({error:err.mesage})
        }else {
            res.status(200).json(rows)
        }
    })
}

export const createClientHandler = (req,res) => {
    const { nombre, email } = req.body;
    // createCliente es la consulta SQL para crear un cliente

    createCliente(nombre, email, (err, result) => {
        if (err) {
            res.status(500).json({error:err.mesage})
        } else {
            res.status(201).json(result)
        }
    })
}