import { register, login } from '../services/authService.js'

// Funcion para controlar de forma asincrona los middleware de autenticación
// fn--> funcion controladora
// retorna una funcion de tipo middleware
// Promise.resolve()--> convierte la función en una promesa

const cathAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};



// Funcion para extraer los datos (username y password) del body de la petición

export const authRegister = cathAsync(async (req, res) => {
    // Descructuramos el email y el password del body
    const { username, password } = req.body;
    // Validamos el email y el password
    await register(username, password);
    // Enviamos una respuesta
    res.status(201).json({ message: 'Usuario registrado correctamente' });
});

export const authLogin = cathAsync(async (req, res) => {
    const { username, password } = req.body;
    const token = await login(username, password);
    res.status(200).json(token);
});