

// function Persona(nombre, apellido){

//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.edad = 30;

//   this.nombreCompleto = function(){
//     return this.nombre + " " + this.apellido;  
//   }
// }

function Informacion(nombre, apellido, edad, calle, numero, colonia, ciu, estado, pais){

  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.nombreCompleto = function() {
    return nombre+" "+apellido+" "+"("+edad+")";
  }

  this.direccion = {
    calle: calle,
    numero: numero,
    colonia: colonia,
    direccionCompleta: function() {
      return calle+" "+numero+" "+colonia;
    }
  }

  this.ciudad = {
    ciu: ciu,
    estado: estado,
    pais: pais,
    ciudadCompleta: function(){
      return ciu+" "+estado+" "+pais;
    }
  }
   
  
  
}


// var juan = new Persona("Marco","Ruvalcaba");

var marco = new Informacion("Marco","Ruvalcaba",47,"Av. Compositores",4550,"Los Pinos","Zapopan","Jalisco","México");

// console.log(juan.nombreCompleto());


console.log(marco.nombreCompleto());
console.log(marco.direccion.direccionCompleta());

console.log(marco.nombreCompleto()+" "+marco.direccion.direccionCompleta()+" "+marco.ciudad.ciudadCompleta());