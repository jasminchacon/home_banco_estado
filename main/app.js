const acordeon = document.getElementsByClassName("contenedor");

for (i = 0; i < acordeon.length; i++) {
  acordeon[i].addEventListener("click", function () {
    this.classList.toggle("activa");
  });
}

//formulario
// Seleccionar elementos
const btnBanca = document.getElementById("btnBanca");
const offcanvas = document.getElementById("offcanvas");
const closeBtn = document.getElementById("closeBtn");

// Abrir el offcanvas al hacer clic en el botón
btnBanca.addEventListener("click", function () {
  offcanvas.style.width = "400px"; // El ancho del offcanvas
});

// Cerrar el offcanvas al hacer clic en la "X"
closeBtn.addEventListener("click", function () {
  offcanvas.style.width = "0"; // Ocultar el offcanvas
});

// Cerrar el offcanvas si el usuario hace clic fuera de él
window.addEventListener("click", function (event) {
  if (event.target === offcanvas) {
    offcanvas.style.width = "0"; // Ocultar el offcanvas
  }
});

document.getElementById("username").addEventListener("input", function (event) {
  //regula que no se agreguen caracteres especiales no deseados
  let rut = event.target.value.replace(/[^0-9kK]/g, ""); // Elimina cualquier carácter no numérico o 'k'
  //verifica si el rut tiene entre 8 o 9 caracteres
  if (rut.length >= 8 && rut.length <= 9) {
    if (rut.length === 9) {
      rut = rut.slice(0, 8) + "-" + rut.slice(8); //inserta el guion o la letra entre
      // los primeros 8 caracteres
    }
  } else if (rut.length > 9) {
    rut = rut.slice(0, 9); //solo permite 9 caracteres
  }

  event.target.value = rut; //actuliza el valor del input con el rut formateado
});
