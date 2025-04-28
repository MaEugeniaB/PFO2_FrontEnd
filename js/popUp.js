 document.addEventListener("DOMContentLoaded", function () {
    // Pop-up
    const formulario = document.getElementById('formulario-contacto');
    const popup = document.getElementById('popup');
    const cerrarBtn = document.getElementById('cerrar-popup');

    if (formulario) {
      formulario.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita el envío real
        popup.style.display = 'flex'; // Muestra el pop-up
        formulario.reset(); // Limpia los campos
      });
    }

    if (cerrarBtn) {
      cerrarBtn.addEventListener('click', function () {
        popup.style.display = 'none';
      });
    }
  });

