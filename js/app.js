
function Persona(nombre, apellido, edad){

  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;

  this.nombreCompleto = function(){
      return this.nombre + " " + this.apellido;
  }

}

var juan = new Persona("Marco","Ruvalcaba",47);

console.log(juan);
console.log(juan.nombre);
console.log(juan.nombreCompleto());