// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    let nombreInput = document.getElementById('amigo');
    let nombre = nombreInput.value.trim(); // Usamos .trim() para eliminar espacios en blanco al inicio y al final.

    if (nombre === '') {
        alert('Porfavor ingrese un nombre');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este nombre ya ha sido añadido. Porfavor, inserte un nombre diferente');
        nombreInput.value = '';
        return;
    }

    amigos.push(nombre);

}


function listaAmigosActualizada() {
    let listaHTML = document.querySelector('name-list');

    listaHTML.innerHTML= '';

    for (let i = 0; i < amigos.length; i++) {
        const element = array[index];
        
    }
    
}








