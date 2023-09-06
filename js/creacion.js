document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('miFormulario');
  
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nombre = formulario.nombre.value;
      const apellido = formulario.apellido.value;
      const sexo = formulario.sexo.value;
      const fecha = formulario.fecha.value;
      const numeroDNI = formulario.numeroDNI.value;
      const fotoCarnet = formulario.fotoCarnet.value; // Tenga en cuenta que no podrá obtener la imagen como cadena, necesitará un enfoque diferente para manejar imágenes
  
      const datos = {
        nombre,
        apellido,
        sexo,
        fecha,
        numeroDNI,
        fotoCarnet
      };
  
      localStorage.setItem('datosUsuario', JSON.stringify([datos]));
      window.location.href = '../pages/documento.html'; // Redirigir a la página de visualización
    });
  });
  