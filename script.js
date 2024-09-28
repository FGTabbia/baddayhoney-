// Cambia el texto y las opciones según la elección del jugador
function eleccion1() {
    // Cambia el texto del diálogo
    document.getElementById('texto-dialogo').innerHTML = "Has dicho: Deberías descansar.";
    
    // Cambia la imagen del personaje
    document.getElementById('personaje').src = "personaje1.jpg"; // Cambiará la imagen a otra (reemplaza el archivo con el nombre correcto)
    
    // Cambia las opciones del diálogo
    document.getElementById('opciones-dialogo').innerHTML = `
        <button onclick="final1()">Sonreír.</button>
        <button onclick="final2()">Ignorar.</button>
    `;
}

function eleccion2() {
    // Cambia el texto del diálogo
    document.getElementById('texto-dialogo').innerHTML = "Has preguntado: ¿Hay algo que pueda hacer?";
    
    // No cambiar la imagen en esta opción
    document.getElementById('personaje').src = "personaje1.jpg"; // Mantiene la misma imagen
    
    // Cambia las opciones del diálogo
    document.getElementById('opciones-dialogo').innerHTML = `
        <button onclick="final3()">Escuchar más.</button>
        <button onclick="final2()">Alejarse.</button>
    `;
}

function final1() {
    document.getElementById('texto-dialogo').innerHTML = "Sonríes y él parece complacido. Fin del demo.";
    document.getElementById('opciones-dialogo').innerHTML = ``; // Elimina las opciones, ya que es el final
}

function final2() {
    document.getElementById('texto-dialogo').innerHTML = "Decides ignorarlo. Fin del demo.";
    document.getElementById('opciones-dialogo').innerHTML = ``; // Elimina las opciones
}

function final3() {
    document.getElementById('texto-dialogo').innerHTML = "Te cuenta más sobre lo que ocurre. Fin del demo.";
    document.getElementById('opciones-dialogo').innerHTML = ``; // Elimina las opciones
}
