document.addEventListener("DOMContentLoaded", function () {
  const botonTop = document.getElementById("boton-top");

  // Mostrar/ocultar el botón al hacer scroll
  window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
          botonTop.style.display = "block";
      } else {
          botonTop.style.display = "none";
      }
  });

  // Acción al hacer clic: subir suavemente
  botonTop.addEventListener("click", function () {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});
