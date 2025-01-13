/**
 * Creacion de un servidor http:
 * Utilidad:
 *  -Responder a solicitudes WEB
 *  -Realiza peticiones WEB, pudiendo funcionar como cliente,
 */
const http = require("http"); //<- Importar el módulo

// Creación del servidor

const serverHlanz1 = http.createServer((req, res) => {
    // configurar el tipo de respuesta
    res.writeHead(200, {"Content-type" : "text/plain"}); // <- Configurar la respuesta
    res.write("Bienvenido a mi servidor NodeJs"); // <- R
    res.end(); //
})

const serverHlanz2 = http.createServer((req,res) => {
    // La función que ejecutamos aquí se realiza para cada solicitud que hagamos.
    res.statusCode = 200; // <- 200 = Todo ok
    res.setHeader("Content-Type", "text/plain"); // <- Establece el tipo del contenido
    res.end("Bienvenido a mi servidor"); // <- Respuesta que envía el servidor
});

const port1 = 3000;// <- Defino el número de puerto que voy a utilizar
const port2 = 4000;

// Hacemos que el servidor escuche en el puerto que le hemos indicado
serverHlanz1.listen(port1,() => {
    console.log(`Servidor ejecutándose a través de la dirección http://localhost:${port1}`);
})

serverHlanz2.listen(port2,() => {
    console.log(`Servidor ejecutándose a través de la dirección http://localhost:${port2}`);
})