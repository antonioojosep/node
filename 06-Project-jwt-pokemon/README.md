Esta aplicación es un sistema de gestión de Pokémon con autenticación JWT, desarrollada con el stack MERN (MongoDB, Express, React y Node.js).

## Características

- Autenticación de usuarios con JWT
- Sistema de favoritos para Pokémon
- Búsqueda de Pokémon en tiempo real
- Visualización detallada de cada Pokémon
- Interfaz responsiva con Tailwind CSS
- Dockerización completa del proyecto

## Tecnologías Utilizadas

### Frontend
- React 19
- React Router DOM 7
- Axios
- Tailwind CSS 4
- Vite

### Backend
- Node.js
- Express
- MongoDB
- JWT (JSON Web Tokens)
- bcryptjs
- cors

## Estructura del Proyecto

```
.env
.gitignore
Backend/
    .env
    Dockerfile
    package.json
    src/
        config/
            cors.js
            database.js
        controllers/
            authController.js
            pokemonController.js
        middleware/
            authMiddleware.js
        models/
            Pokemon.js
            User.js
        routes/
            authRoutes.js
            pokemonRoutes.js
            userRoutes.js
        server.js
        services/
            authService.js
            favoriteService.js
docker-compose.yml
Frontend/
    .gitignore
    Dockerfile
    eslint.config.js
    index.html
    package.json
    public/
        vite.svg
    README.md
    src/
        App.jsx
        assets/
        components/
            PokemonCard.jsx
            SearchBar.jsx
        context/
            AuthContext.jsx
            PokemonContext.jsx
        index.css
        main.jsx
        pages/
            Dashboard.jsx
            Login.jsx
            PokemonDetails.jsx
            Register.jsx
    vite.config.js
README.md
```

## Instalación y Ejecución

1. Clonar el repositorio

2. Configurar las variables de entorno:
   ```bash
   # .env
   MONGODB_URI=mongodb://admin:secret@mongodb:27017/jwt-basic?authSource=admin
   JWT_SECRET=
   FRONTEND_URL=http://localhost:5173
   MONGO_INITDB_ROOT_USERNAME=
   MONGO_INITDB_ROOT_PASSWORD=
   MONGO_INITDB_DATABASE=jwt-basic
   ```

3. Iniciar con Docker Compose:
   ```bash
   docker-compose up --build
   ```

## Endpoints API

### Autenticación
- `POST /auth/register` - Registro de usuarios
- `POST /auth/login` - Inicio de sesión

### Pokémon
- `GET /pokemon` - Obtener todos los Pokémon
- `GET /pokemon/:id` - Obtener un Pokémon específico
- `GET /pokemon/search?name={name}` - Buscar Pokémon por nombre

### Favoritos
- `GET /user/favorites` - Obtener favoritos del usuario
- `POST /user/favorites/:userId` - Añadir a favoritos
- `DELETE /user/favorites/:userId` - Eliminar de favoritos

## Puertos
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`
- MongoDB: `mongodb://localhost:27017`

## Características de Seguridad
- Autenticación JWT
- Encriptación de contraseñas con bcrypt
- Middleware de autenticación para rutas protegidas
- Configuración CORS

## Contribuir
1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Autor
Antonio José Pérez Carrillo

## Licencia
Este proyecto está bajo la Licencia MIT.