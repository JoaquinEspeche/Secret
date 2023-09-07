
function mostrarFechaHoraActual() {
  var fechaHoraActual = new Date();
  var fechaActual = fechaHoraActual.toISOString().slice(0, 10);
  var horaActual = fechaHoraActual.toTimeString().slice(0, 8);

  // Actualiza el contenido de los elementos HTML con los valores obtenidos
  document.getElementById("fecha").textContent = fechaActual;
  document.getElementById("hora").textContent = horaActual;
}

// Llama a la función para mostrar la fecha y hora actual cuando se cargue la página
window.onload = function () {
  mostrarFechaHoraActual();
};

var toggleButton = document.getElementById('toggleFullScreen');

toggleButton.addEventListener('click', function() {
    var element = document.documentElement; // Elemento raíz de la página (el body o el html)
    
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Para navegadores Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Para navegadores WebKit (Chrome, Safari)
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // Para Internet Explorer
        element.msRequestFullscreen();
    }
});


document.addEventListener('DOMContentLoaded', function() {
  const datosGuardados = localStorage.getItem('datosUsuario');
  const datos = JSON.parse(datosGuardados);

  if (datos) {
    mostrarDatosEnHTML(datos[0]);
  }
});

function mostrarDatosEnHTML(datos) {
  let contenidoHTML = `
  <div class="card-container" id="tarjeta">
  <div class="card">
    <div class="card-front">
      <div class="entry name-entry">${datos.nombre}</div>
      <div class="entry lastname-entry">${datos.apellido}</div>
      <div class="entry sex-entry">${datos.sexo}</div>
      <div class="entry dob-entry">${datos.fecha}</div>
      <div class="entry id-entry">${datos.numeroDNI}</div>
      <div class="entry img-entry"><img src="${datos.fotoCarnet}" alt="" class="img-entry"></div>
    </div>
    <div class="card-back">
      <div class="entry nameBack-entry">${datos.nombre}<<
      </div>
      <div class="entry apellidoBack-entry">${datos.apellido}<<</div>
    </div>
  </div>
</div>
  `;
  document.getElementById("card").innerHTML = contenidoHTML;
}

const tarjeta = document.getElementById('tarjeta');

tarjeta.addEventListener('click', function() {
  tarjeta.classList.toggle('flipped');
});
