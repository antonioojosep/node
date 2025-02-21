# Proyectos de la Asignatura de Node.js

Este repositorio contiene varios proyectos desarrollados como parte de la asignatura de Node.js. Cada proyecto aborda diferentes aspectos y funcionalidades de Node.js, desde la creación de servidores HTTP hasta la autenticación con JWT y la integración con bases de datos.

## Estructura del Repositorio

- `00-Prueba/`
- `01-Http-Server/`
- `02-Upload-data/`
- `03-Project-jwt/`
- `04-Proyecto-jwt-cookies/`
- `05-MovieDB/`
- `06-Project-jwt-pokemon/`
- `API-RESERVAS/`

### 00-Prueba

Este proyecto es una prueba inicial que permite manejar la entrada y salida de datos de un archivo `usuarios.json` a través de un menú interactivo en la consola. Las funcionalidades incluyen listar usuarios, agregar usuarios, eliminar usuarios y buscar usuarios por nombre.

### 01-Http-Server

Este proyecto contiene ejemplos de cómo crear servidores HTTP básicos utilizando Node.js y el módulo `http`. Incluye ejemplos de manejo de rutas y respuestas.

### 02-Upload-data

Este proyecto se centra en la subida de datos y archivos a un servidor. Incluye la configuración de un servidor Express y la integración con Docker para la contenedorización de la aplicación.

### 03-Project-jwt

Este proyecto implementa un sistema de autenticación basado en JWT (JSON Web Tokens). Utiliza Node.js, Express y MongoDB para el backend, y React para el frontend. Incluye funcionalidades de registro, inicio de sesión y protección de rutas mediante middleware de autenticación.

### 04-Proyecto-jwt-cookies

Similar al proyecto anterior, este proyecto también implementa autenticación con JWT, pero utiliza cookies para almacenar el token. Incluye ejemplos de configuración de middleware de autenticación y rutas protegidas.

### 05-MovieDB

Este proyecto es una base de datos de películas. Incluye funcionalidades para agregar, listar y buscar películas. Utiliza Node.js y Express para el backend y una base de datos para almacenar la información de las películas.

### 06-Project-jwt-pokemon

Este proyecto es un sistema de gestión de Pokémon con autenticación JWT, desarrollado con el stack MERN (MongoDB, Express, React y Node.js). Incluye funcionalidades como autenticación de usuarios, sistema de favoritos para Pokémon, búsqueda en tiempo real y una interfaz responsiva con Tailwind CSS.

### API-RESERVAS

Este proyecto es una API para la gestión de reservas. Utiliza SQLite como base de datos y Express para el servidor. Incluye funcionalidades para crear y listar clientes y reservas.

## Instalación y Ejecución

Para cada proyecto, sigue los siguientes pasos generales:

1. Clonar el repositorio.
2. Navegar al directorio del proyecto.
3. Instalar las dependencias con `npm install`.
4. Configurar las variables de entorno si es necesario.
5. Iniciar el proyecto con `npm start` o el comando especificado en el `package.json`.

## Contribuir

1. Haz un fork del proyecto.
2. Crea una rama para tu nueva funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los commits de tus cambios (`git commit -m 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Autor

Antonio José Pérez Carrillo

## Licencia

Este proyecto está bajo la Licencia MIT.