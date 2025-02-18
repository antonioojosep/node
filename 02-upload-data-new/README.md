# Proyecto de Gestión de Archivos con Node.js

Este proyecto implementa un sistema de gestión de archivos con funcionalidades de carga, visualización, reciclaje y envío por correo electrónico.

## Características

- Carga de archivos
- Visualización de archivos subidos
- Papelera de reciclaje
- Visualización del espacio ocupado
- Envío de archivos por correo electrónico
- Interfaz gráfica con Tailwind CSS
- Dockerización del proyecto

## Estructura del Proyecto

```
02-upload-data-new/
├── controllers/
│   ├── mailController.js
│   └── uploadController.js
├── public/
│   ├── index.html
│   ├── input.css
│   ├── output.css
│   └── scripts/
│       └── main.js
├── routes/
│   ├── mailRoutes.js
│   └── uploadRoutes.js
├── uploads/
│   └── (archivos subidos)
├── recicled/
│   └── (archivos reciclados)
├── .env
├── app.js
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## Requisitos Previos

- Node.js (v16 o superior)
- Docker (opcional)
- Cuenta en SendGrid para envío de correos

## Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd 02-upload-data-new
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo .env con las siguientes variables:
```
SENDGRID_API_KEY=tu_api_key_de_sendgrid
```

4. Iniciar el servidor:
```bash
npm start
```

## Uso con Docker

1. Construir la imagen:
```bash
docker-compose build
```

2. Iniciar el contenedor:
```bash
docker-compose up
```

## API Endpoints

### Gestión de Archivos
- `POST /uploads`: Subir un archivo
- `GET /uploads`: Listar archivos subidos
- `POST /uploads/:fileName`: Mover archivo a papelera
- `GET /uploads/recicled`: Listar archivos en papelera
- `DELETE /uploads/recicled`: Vaciar papelera

### Correo Electrónico
- `GET /mail`: Enviar archivos por correo

## Características Detalladas

### Sistema de Archivos
- Carga de archivos con visualización en tiempo real
- Barra de progreso que muestra el espacio ocupado
- Sistema de papelera de reciclaje
- Gestión de espacio en disco

### Interfaz de Usuario
- Diseño responsive con Tailwind CSS
- Visualización de archivos con tamaños
- Indicadores de espacio usado
- Botones de acción intuitivos

### Correo Electrónico
- Integración con SendGrid
- Envío de archivos como adjuntos
- Formato JSON para listado de archivos

## Tecnologías Utilizadas

- Express.js: Framework web
- Multer: Gestión de subida de archivos
- SendGrid: Servicio de correo electrónico
- Tailwind CSS: Framework CSS
- Docker: Containerización


## Licencia

Este proyecto está bajo la Licencia ISC.