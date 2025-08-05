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
    listaAmigosActualizada();
    nombreInput.value = '';

}


function listaAmigosActualizada() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        listaHTML.appendChild(elementoLista);
    }
        
}

function sortearAmigo () {
    if (amigos.lenght < 2) {
        alert('Porfavor, agregue al menos 2 amigos');
        return;
    }

    let randomName = Math.floor(Math.random()*amigos.length);
    let amigoSecreto = amigos[randomName]

    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `El amigo secreto es: ${amigoSecreto}!`;
}













