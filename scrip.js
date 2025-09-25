const texto = document.getElementById("texto");

// Colores que irá cambiando
const colores = ["#fca326", "#ff5733", "#28a745", "#007bff", "#9b59b6"];
let indice = 0;

// Cambiar color cada 2 segundos
setInterval(() => {
  texto.style.color = colores[indice];
  indice = (indice + 1) % colores.length;

  // Disparar animación de rebote
  texto.classList.add("bounce");
  
  // Quitar la clase después de la animación
  setTimeout(() => {
    texto.classList.remove("bounce");
  }, 600);

}, 2000);
