

function primeraFuncion(){

  var a = 20;

  console.log(a);
}

primeraFuncion();




function invocarFuncion(){

  console.log("Invocada");
}

// COMO LO VIMOS ANTES SE IGUALAN LOS OBJETOS SOLO LLAMANDOLOS SIN LOS PARENTESIS
var miFuncion = invocarFuncion;

miFuncion();