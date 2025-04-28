document.addEventListener("DOMContentLoaded", function () {
    // Contador de visitas
    let visitas = localStorage.getItem('visitCount');
    visitas = visitas ? parseInt(visitas) + 1 : 1;
    localStorage.setItem('visitCount', visitas);

    const contador = document.getElementById('contador');
    if (contador) contador.textContent = visitas;

    // Animación del reloj de arena por 3 segundos
    const reloj = document.getElementById('reloj-arena');
    if (reloj) {
      reloj.classList.add('reloj-activo');
      setTimeout(() => {
        reloj.classList.remove('reloj-activo');
      }, 3000); // Detener después de 3 segundos
    }
  });