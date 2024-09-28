// Cambia el texto y las opciones según la elección del jugador
function eleccion1() {
    // Respuesta de geto 
    document.getElementById('texto-dialogo').innerHTML = "Eso intento, pero cada vez es mas dificil";
    
    // Cambia la imagen del personaje
    document.getElementById('personaje').src = "personaje1.jpg"; // imagen de fondo
    
    // Cambia las opciones del diálogo 
    document.getElementById('opciones-dialogo').innerHTML = `
        <button onclick="final1()">Sonreír.</button>
        <button onclick="final2()">Ignorar.</button>
    `;
}

function eleccion2() {
    // Respuesta de geto 
    document.getElementById('texto-dialogo').innerHTML = "Has preguntado: ¿Hay algo que pueda hacer?";
    
    // No cambiar la imagen en esta opción
    document.getElementById('personaje').src = "personaje1.jpg"; 
    
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
