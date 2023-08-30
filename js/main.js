  // Solicitar los datos al usuario
  const name = prompt("Ingrese su nombre:");
  const apellido = prompt("Ingrese su apellido:");
  const sexo = prompt("Ingrese su sexo:");
  const fecha = prompt("Ingrese su fecha de nacimiento:");
  const numeroDNI = prompt("Ingrese su número de identificación:");
  const fotoCarnet = prompt("Ingrese la URL de su foto:");

    const datos = {
      name,
      apellido,
      sexo,
      fecha,
      numeroDNI,
      fotoCarnet
    };
    localStorage.setItem('datosUsuario', JSON.stringify(datos));

    const datosGuardados = localStorage.getItem('datosUsuario');
  
  
  // Función para cargar los datos desde el almacenamiento local
  if (datosGuardados) {
    const datos = JSON.parse(datosGuardados);
    if (datosGuardados) {
      const contenidoHTML = `
      <div class="card">
        <div class="entry name-entry">${datos.name}</div>
        <div class="entry lastname-entry">${datos.apellido}</div>
        <div class="entry sex-entry">${datos.sexo}</div>
        <div class="entry dob-entry">${datos.fecha}</div>
        <div class="entry id-entry">${datos.numeroDNI}</div>
        <div class="entry img-entry"><img src="${datos.fotoCarnet}" alt="" class="img-entry"></div>
     </div>
        `;
      document.getElementById("card").innerHTML = contenidoHTML;
    }
  }
  
