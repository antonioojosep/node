/**
 * Crear un servidor web que responda segun la ruta
 */

const http = require("http");

// Creamos el servidor
const serverHlanzWeb = http.createServer((req, res) => {
    const url = req.url; // <- Capturamos la URL que el cliente nos ha solicitado al servidor

    if (url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Bienvenido al servidor HLANZ. Usted está en la página principal\n");
    }else if (url === "/about") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Bienvenido al servidor HLANZ. Usted está en Acerca de.\n");
    }else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("Page Not Found!\n")
    }
});

const port = 3000;

// Asocio el puerto al Listener de Node

serverHlanzWeb.listen(port,() => {
    console.log(`Servidor escuchando http://localhost:${port}`);
});

