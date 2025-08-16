const acordeon = document.getElementsByClassName("contenedor");

for (i = 0; i < acordeon.length; i++) {
  acordeon[i].addEventListener("click", function () {
    this.classList.toggle("activa");
  });
}

const btnBanca = document.getElementById("btnBanca");
const offcanvas = document.getElementById("offcanvas");
const closeBtn = document.getElementById("closeBtn");

btnBanca.addEventListener("click", function () {
  offcanvas.style.width = "400px";
});

closeBtn.addEventListener("click", function () {
  offcanvas.style.width = "0";
});

window.addEventListener("click", function (event) {
  if (event.target === offcanvas) {
    offcanvas.style.width = "0";
  }
});

document.getElementById("username").addEventListener("input", function (event) {
  let rut = event.target.value.replace(/[^0-9kK]/g, "");
  if (rut.length >= 8 && rut.length <= 9) {
    if (rut.length === 9) {
      rut = rut.slice(0, 8) + "-" + rut.slice(8);
    }
  } else if (rut.length > 9) {
    rut = rut.slice(0, 9);
  }

  event.target.value = rut;
});
