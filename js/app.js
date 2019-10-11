

document.onmousedown = function (arg) {
  
  
  if (arg.button === 2) {
    
    alert("Click bloqueado");

  }else{

    console.log("No hay problema");

  }

};

// con este evento podemos seleccionar un pedazo de texto y al terminar lo tenemos dentro de una variable
document.onmouseup = function () {
  
  var texto = window.getSelection().toString();

  console.log(texto);
}