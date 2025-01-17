const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const amigosIngresados = [];

function agregarAmigo() {
    const amigo = inputAmigo.value.trim();
    if (!amigo) {
        alert("Por favor, inserte un nombre.");
        return;
    }
    if (amigosIngresados.includes(amigo)) {
        alert("Este amigo ya ha sido agregado.");
        return;
    }
    amigosIngresados.push(amigo);
    inputAmigo.value = ''; 
    actualizarDOM();
}

function actualizarDOM() {
    listaAmigos.innerHTML = "";
    amigosIngresados.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    })
}

function sortearAmigo() {
    if (amigosIngresados.length > 0) {
        const indiceMaximo = amigosIngresados.length;
        const indiceRandom = Math.floor(Math.random() * indiceMaximo);
        const amigoSorteado = amigosIngresados[indiceRandom];
        const li = document.createElement('li');

        listaAmigos.innerHTML = "";
        resultado.innerHTML = "";
        li.textContent = "El amigo secreto sorteado es: " + amigoSorteado;
        resultado.appendChild(li);

        setTimeout(() => {
            preguntarReiniciar()
        }, 0);

    } else {
        alert("Para realizar el sorteo se necesitan amigos.");
    }
}

function preguntarReiniciar() {
    const respuesta = confirm("¿Quieres volver a jugar?");
    if (respuesta) {
        location.reload(); // Recarga la página
    } else {
        window.close();
    }
}
