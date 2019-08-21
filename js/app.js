// Una buena practica es poner las funciones al inicio del archivo
function imprimir( nombre, apellido ){

  if (apellido === undefined) {
    
    apellido = "xxx";

  }
  
  console.log(nombre +' '+ apellido);

  // Forma rapida el mismo resultado
  apellido = apellido || "xxx";

  console.log(nombre +' '+ apellido);

}

// Funcion con objetos
function imprimirPersona(persona){

  console.log(persona.nombre +" "+ persona.apellido);
}

imprimir("Marco","Ruvalcaba");


//Objetos anonimos
imprimirPersona({
  nombre: 'Violeta',
  apellido: 'González'
});