//carrusel de peliculas
  const carrusel = document.getElementById("tarjetasPeli");
  const btnIzquierda = document.querySelector(".btn-carrusel.izquierda");
  const btnDerecha = document.querySelector(".btn-carrusel.derecha");

  const scrollAmount = 320; // Ajustá según el ancho de las tarjetas

  btnIzquierda.addEventListener("click", () => {
    carrusel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  btnDerecha.addEventListener("click", () => {
    carrusel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

