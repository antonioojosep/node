import express from 'express';
import { createClientHandler, getAllClientsHandler, getClientsHandler } from '../controllers/clientesController.js';

// tengo que crear un ENRUTADOR  (Router de express) para las rutas de clientes
const router = express.Router();

// Todas las operaciones y rutas disponibles para los clientes

// // get:
router.get('/:id', getClientsHandler);
router.post("/", createClientHandler);
// router.delete('/:id', deleteClientHandler);
// // getAll:
 router.get("/",getAllClientsHandler);

export default router;