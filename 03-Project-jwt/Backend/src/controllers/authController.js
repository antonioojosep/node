// Funcion para controlar de forma asincrona los middleware de autenticación
// fn--> funcion controladora
// retorna una funcion de tipo middleware
// Promise.resolve()--> convierte la función en una promesa

const cathAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};



// Funcion para extraer los datos (email y password) del body de la petición

export const register = cathAsync(async (req, res) => {
    // Descructuramos el email y el password del body
    const { email, password } = req.body;
    // Validamos el email y el password
    await AuthService.register(email, password);
    // Enviamos una respuesta
    res.status(201).json({ message: 'Usuario registrado correctamente' });
});