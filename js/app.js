

// Funcion con objetos
function imprimirPersona(persona){

  console.log(persona.nombre +" "+ persona.apellido);
  //si modificamos el nombre de el objeto nos devolvera este cambio en la funcion.
  persona.nombre = "Romina";
}

var obj = {
  nombre: 'Violeta',
  apellido: 'González'
}

imprimirPersona(obj);

console.log(obj);


console.log(".................................................");
//FUNCION ANONIMA
//funcion dentro de otra función;
function imprimir( fn ){
  fn();
}

var persona = {
  nombre: "Violeta",
  apellido: "González"
};

imprimir( function(){

  console.log("Funcion anónima");

});

console.log(".................................................");
//FUNCION DECLARADA

var miFuncion = function(){
  console.log("miFunción");
}

imprimir(miFuncion);