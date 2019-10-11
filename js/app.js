

function validar() {

  var nombre = document.getElementById("txtNombre").value;
  var apellido = document.getElementById("txtApellido").value;


  console.log(nombre);

  if (nombre.length < 1) {
    return false;
  }

  if (apellido.length < 1) {
    return false;
  }

  return true;
}


console.log(window.location.search);
console.log(window.location.search.split("&"));

function getParamURL(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
}

console.log(getParamURL("txtApellido"));