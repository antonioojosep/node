import { deleteFile } from "../../controllers/uploadController.js";

const uploadForm = document.getElementById('uploadForm');
const fileList = document.getElementById('fileList');

// Funcion para subir archivos
const  fetchFiles = async () => {
    const response = await fetch('/upload');
    if (!response.ok) {
        throw new Error('Error al listar los archivos');
    }
    const files = await response.json();
    // Limpiamos la lista de archivos de la pagina
    fileList.innerHTML = ''; // Limpiar la lista antes de renderizar
    // Renderizamos los archivos
    files.forEach(file => {
        const li = document.createElement('li');
        li.className = 'flex items-center justify-between p-2 bg-gray-200 border-b border-gray-200 rounded-lg shadow-md';
        li.innerHTML = `
            <span>${file}</span>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" data-file="${file}">
                Eliminar
            </button>
        `;
        fileList.appendChild(li);
    });
    // Agregamos el evento click a los botones de eliminar
    document.querySelectorAll('button[data-file]').forEach(button => {
        button.addEventListener('click', async (e) => {
            const filename = e.target.dataset.file;
            await deleteFile(filename);
            fetchFiles();
        });
    });
};



uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(uploadForm);
    // Fetch para subir archivos
    const response = await fetch('/upload', {
        method: 'POST',
        body: formData
    });
    if (!response.ok) {
        throw new Error('Error al subir el archivo');
    };
    // Limpiamos el formulario
    uploadForm.reset();
    // Actualizar la lista de archivos
    fetchFiles();
});

// Cada vez que cargo la pagina debo de obtener los ficheros
document.addEventListener('DOMContentLoaded', () => {
    fetchFiles();
});