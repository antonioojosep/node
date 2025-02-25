# MovieDB - Aplicación de Gestión de Películas 🎬

## Descripción

Aplicación fullstack que permite a los usuarios explorar películas, guardarlas como favoritas y comentarlas. Desarrollada con la pila MERN (MongoDB, Express, React, Node.js) y dockerizada.

## Tecnologías Utilizadas 🛠️

### Frontend
- React 19
- React Router DOM 7 
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express
- MongoDB
- JWT para autenticación
- bcrypt para encriptación

### DevOps
- Docker & Docker Compose
- PNPM

## Estructura del Proyecto 📂

```bash
moviedb/
├── frontend/                # Aplicación React
│   ├── src/
│   │   ├── components/      # Componentes reutilizables
│   │   ├── context/        # Contextos (Auth, Movies)
│   │   ├── pages/          # Páginas de la aplicación
│   │   └── main.jsx        # Punto de entrada
│   └── Dockerfile
│
├── backend/                # API Node.js
│   ├── config/            # Configuraciones (DB, CORS)
│   ├── controllers/       # Lógica de negocio
│   ├── models/           # Modelos MongoDB
│   ├── routes/           # Endpoints API
│   └── Dockerfile
│
└── docker-compose.yaml    # Configuración Docker
```

## Características 🌟

- 👤 Sistema de autenticación completo
- 🎬 Catálogo de películas
- ⭐ Gestión de favoritos
- 💬 Sistema de comentarios
- 🔒 Rutas protegidas
- 🎨 Diseño responsive

## Instalación y Uso 🚀

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd moviedb
```

2. **Configurar variables de entorno**
```env
allowOrigin = ['http://localhost:5173', 'http://localhost:5174']
JWT_SECRET = 
MONGODB_URI = 'mongodb://root:example@mongo:27017/movie?authSource=admin'
```

3. **Iniciar con Docker**
```bash
docker-compose up --build
```

## Acceso 🌐

- Frontend: http://localhost:5173
- Backend: http://localhost:3000
- MongoDB Express: http://localhost:8081

## API Endpoints 📡

### Autenticación
```http
POST /auth/register     # Registro de usuario
POST /auth/login       # Inicio de sesión  
POST /auth/logout      # Cerrar sesión
```

### Películas
```http
GET /movies            # Obtener todas las películas
GET /movies/:id        # Obtener película por ID
```

### Favoritos
```http
POST /favorites/:userId    # Añadir a favoritos
GET /favorites/:userId     # Obtener favoritos
DELETE /favorites/:id      # Eliminar de favoritos
```

### Comentarios 
```http
POST /comments/new/:movieId    # Crear comentario
GET /comments/:movieId         # Obtener comentarios
DELETE /comments/:id           # Eliminar comentario
```

## Autor ✒️

* **Antonio José Pérez**

## Licencia 📄

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE.md para detalles