
function obtenerAleatorio(){

  return Math.random();

}

function obtenerNombre(){

  return "Marco";
}

function esMayor05(){

  if (obtenerAleatorio()> 0.5) {
    return true;
  }else{
    return false;
  }
}

//FUNCION CON OBJETOS
function crearPersona( nombre, apellido){

  //variable anonima
  return {
    nombre: nombre,
    apellido: apellido
  }
}

console.log(obtenerAleatorio() * 10);

//Meter la funcion en una variable

var nombre = obtenerNombre();

console.log(nombre + " Ruvalcaba");

console.log("...........................");

if (esMayor05()) {
  console.log("Es mayor a 0.5");
}else{
  console.log("Es menor a 0.5");
}

//La variable se convierte como un objeto.
var persona = crearPersona("Maria","Paz");
console.log(persona);
//Para llamar a cada elemento del objeto
console.log(persona.nombre);
console.log(persona.apellido);