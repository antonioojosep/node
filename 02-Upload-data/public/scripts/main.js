// Obtener referencias
const uploadForm = document.getElementById("uploadForm");
const fileList = document.getElementById("fileList");
const recycleList = document.getElementById("recycleList");
const mail = document.getElementById("mail");

// Función para listar los archivos subidos
async function fetchFiles() {
  const response = await fetch("/uploads");
  if (!response.ok) {
    console.error("Error al obtener los archivos");
    return;
  }
  const files = await response.json();
  fileList.innerHTML = ""; // Limpiar la lista antes de renderizar

  // Renderizar los archivos en la lista
  files.Files.forEach((file) => {
    const li = document.createElement("li");
    li.id="btn1";
    li.className =
      "flex justify-between items-center bg-gray-100 p-2 rounded-lg shadow-sm";
    li.innerHTML = `
      <span>${file.name}: ${file.size}MB</span>
      <button class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600" data-filename="${file.name}">Eliminar</button>
    `;
    fileList.appendChild(li);
  });

  // Espacio ocupado de la carpeta uploads
  const container = document.createElement("div");
  const progress = document.createElement("div");
  container.className =
    " w-full bg-gray-300 rounded-lg overflow-hidden h-6 mt-5 ";
  progress.className =
      ` h-full w-0 bg-green-500 rounded-lg`;
  let totalSize = parseFloat(files.Files.reduce((acc, file) => acc + file.size, 0).toFixed(2));
  progress.innerHTML = `<p>${totalSize}MB</p>`
  progress.style.width= `${totalSize * 10}%`;
  fileList.appendChild(container);
  container.appendChild(progress);

  // Agregar eventos de eliminación
  document.querySelectorAll("#btn1").forEach((button) => {
    button.addEventListener("click", async (e) => {
      const fileName = e.target.dataset.filename;
      await deleteFile(fileName);
      fetchFiles(); // Actualizar la lista
      fetchRecicledFiles(); // Actualizar la lista de reciclaje
    });
  });
  fetchRecicledFiles();
}

async function fetchRecicledFiles() {
  const response = await fetch("/uploads/recicled")
  if (!response.ok) {
    console.error("Error al obtener los archivos");
    return;
  }
  const filesRecicled = await response.json();
  recycleList.innerHTML = "";


  // Renderizar los archivos en la lista
  filesRecicled.files.forEach((file) => {
    const li = document.createElement("li");
    li.className =
      "flex justify-between items-center bg-gray-100 p-2 rounded-lg shadow-sm text-gray-500";
    li.innerHTML = `
      <span>${file}</span>
    `;
    recycleList.appendChild(li);
  });

  // Espacio ocupado de la carpeta recycle
  const container = document.createElement("div");
  const progress = document.createElement("div");
  const empty = document.createElement("button");
  empty.className = "bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600";
  empty.id = "btn2";
  empty.innerText= "Vaciar papelera"
  container.className =
    "w-full bg-gray-300 rounded-lg overflow-hidden h-6 mt-5";
  progress.innerHTML = `<p>${filesRecicled.size}MB</p>`
  progress.className =
      "h-full w-0 bg-green-500 rounded-lg";
  progress.style.width= `${filesRecicled.size * 100}%`;
  recycleList.appendChild(container);
  container.appendChild(progress);
  recycleList.appendChild(empty);
  empty.addEventListener("click", async (e) => {
    await voidRecicled();
    fetchRecicledFiles();
  })
}

// Función para eliminar archivo
async function deleteFile(fileName) {
  const response = await fetch(`/uploads/${fileName}`, {
    method: "POST",
  });
  if (!response.ok) {
    console.error(`Error al eliminar el archivo: ${fileName}`);
  }
}

// Función para eliminar archivo
async function voidRecicled() {
  const response = await fetch(`/uploads/recicled`, {
    method: "DELETE",
  });
  if (!response.ok) {
    console.error(`Error al intentar vaciar la papelera`);
  }
}

// Manejador de envío del formulario de subida
uploadForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(uploadForm);
  const response = await fetch("/uploads", {
    method: "POST",
    body: formData,
  });
  if (response.ok) {
    uploadForm.reset(); // Limpiar el formulario
    fetchFiles(); // Actualizar la lista
  } else {
    console.error("Error al subir el archivo");
  }
});

// Enviar correo electronico
mail.addEventListener("click", async (e) => {
  e.preventDefault();
  await fetch("/mail");
});


// Cargar la lista de archivos al cargar la página
document.addEventListener("DOMContentLoaded", fetchFiles);