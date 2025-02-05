// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let amigosSorteados = [];

function mostrarMensaje(mensaje, tipo) { // Función para mostrar mensajes
    let mensajeElemento = document.getElementById("mensaje");
    mensajeElemento.textContent = mensaje; // Cambia el texto del mensaje
    mensajeElemento.className = tipo; // Cambia la clase del mensaje
}

function agregarAmigo() { // Función para agregar amigos
    let input = document.getElementById("amigo"); // Obtiene el input
    let nombre = input.value.trim(); // Elimina los espacios en blanco al inicio y al final

    if(nombre === "") { 
        mostrarMensaje("Debe ingresar un nombre", "error"); // Muestra un mensaje de error
        return;
    }

    if(listaAmigos.includes(nombre)) {  // chequea si el amigo ya fue agregado
        mostrarMensaje("El amigo ya fue agregado", "error");
        return;
    }

    listaAmigos.push(nombre);   // Agrega el amigo a la lista
    actualizarLista();  // Actualiza la lista de amigos
    input.value = "";   
    mostrarMensaje("Amigo agregado", "success");    // Muestra un mensaje de éxito
}

function actualizarLista() {   // Función para actualizar la lista de amigos
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach(amigo => {  // Recorre la lista de amigos
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {   // Función para sortear amigo secreto
   let disponibles = listaAmigos.filter(amigo => !amigosSorteados.includes(amigo)); // Filtra los amigos que no han sido sorteados    
    if (disponibles.length === 0) { // Si no hay amigos disponibles
        mostrarMensaje("Todos los amigos ya fueron sorteados", "error");
        return;
    }

   if (listaAmigos.length === 0) {
        alert("Deben haber al menos 2 amigos para sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * disponibles.length);   // Obtiene un índice aleatorio
    let seleccionado = disponibles[indiceAleatorio];    // Obtiene el amigo seleccionado

    amigosSorteados.push(seleccionado);  // Agrega el amigo seleccionado a la lista de amigos sorteados
    mostrarMensaje(`El amigo seleccionado es: ${seleccionado}`, "success");   // Muestra un mensaje de éxito
    //let amigoSecreto = listaAmigos[indiceAleatorio];    // Obtiene el amigo secreto

    let li = document.createElement("li");  // Crea un elemento li
    li.textContent = `El Amigo Secreto es: ${seleccionado}`;    // Agrega el amigo secreto al li
     resultado.innerHTML = ""; 
    resultado.appendChild(li);  // Agrega el li al resultado
    mostrarMensaje("Sorteo realizado", "success");  // Muestra un mensaje de éxito

}

function reiniciarSorteo(){
    listaAmigos = [];
    amigosSorteados = [];
    mostrarMensaje("Sorteo reiniciado", "success");
}