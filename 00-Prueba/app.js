/* Programa que permita manejar la E/S de una data usuarios.json
* a traves de un menu
* La data sera: {nombre: string, edad: number}
* El programa permitira
* Listar usuarios
* Agregar usuaios
* Salir
* Eliminar
* Buscar usuario por nombre
*/


const colors = require('colors');
const readline = require('readline-sync');
const fs = require('fs');


//-------------DECLARACION DE VARIABLES------------------
const FILE_NAME_DATA = "./data/usuarios.json";

//------------DECLARACION DE FUNCIONES-------------------

function addUser() {
    //debe pedir un usuario
    //si el usuario ya existe, debe mostrar un mensaje de error
    //si no existe, debe pedir la edad del usuario
    //guardar el usuario en el archivo usuarios.json
    console.clear();
    //pedimos un nombre por pantalla
    const name = readline.question("Ingrese el nombre del usuario: ".yellow);
    if (name === "") {
        console.log("Nombre de usuario invalido".red);
        return;
    }

    //buscar si el usuario ya existe
    if (searchUser(name)) {
        console.log("El usuario ya existe".red);
        return;
    }
    
    //pedimos la edad por pantalla
    const age = readline.questionInt("Ingrese la edad del usuario".yellow, {
        max: 150,
        min: 1
    });

    // Crear el objeto del usuario e insertarlo en la data
    const newUserData = {
        name: name,
        age: age
    }
    const oldUsers = loadDataJSON();
    oldUsers.push(newUserData);

    // Guardar los datos en el archivo JSON
    saveDataJSON(oldUsers);
}

function loadDataJSON() {
    try { 
        if (!fs.existsSync(FILE_NAME_DATA)) {return []}
        const data = JSON.parse(fs.readFileSync(FILE_NAME_DATA, 'utf8'));
        console.log("Datos cargados exitosamente".green);
        return data;  //devuelve los usuarios guardados en el archivo JSON
    } catch (error) {
        console.error("Error al cargar los datos de JSON".red);
        return [];
    }
}

function saveDataJSON(data) {
    try {
        fs.writeFileSync(FILE_NAME_DATA, JSON.stringify(data), 'utf8');
        console.log("Usuarios guardados exitosamente".green);
    } catch (error) {
        console.error("Error al guardar los datos de JSON".red);
    }
}

function listUsers() {
    const users = loadDataJSON();
    console.log("**************".green);
    console.log("Listado de Usuarios".green);
    users.forEach(user => console.log(`Nombre: ${user.name}, Edad: ${user.age}`));
    console.log("**************".green);
}

function searchUser(nameFind) {
   const users = loadDataJSON();
    return users.find(user => user.name === nameFind) || null;
}

function deleteUser() {
    const name = readline.question("Ingrese el nombre del usuario que desea eliminar: ".yellow);
    if(searchUser(name)!= null) {
        
    }
    
}

function menu() {
    console.clear();
    console.log("**************".green);
    console.log("   Aplicacion de usuarios".green);
    console.log("1.Agregar Usuario".green);
    console.log("2.Listar Usuarios".green);
    console.log("3.Eliminar Usuario".green);
    console.log("3.Salir".green);
    const option = readline.questionInt("Seleccione una opcion: (1,2,3)".yellow);
    switch (option) {
        case 1:
            addUser();
            break;
        case 2:
            listUsers();
            break;
        case 3:
            deleteUser();
            break;
        case 4:
            console.log("Gracias por usar la aplicacion".yellow);
            return false;
        default:
            console.log("mal".red);
            break;
    }
}

// --------------INICIO APLICACION----------------------
menu();