function crearPersona(nombre , apellido){

  return{
    nombre: nombre,
    apellido: apellido
  }
}

function creaFuncion(){

  return function( nombre ){
    console.log("Me creo " + nombre );

    return function(){
      console.log("Segunda funcion");
    }
  }
}

var persona = crearPersona("Marco","Ruvalcaba");

var nuevaFuncion = creaFuncion();

var segundaFuncion = nuevaFuncion( persona.nombre );

segundaFuncion();