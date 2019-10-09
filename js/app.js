for (let i = 0; i <= 10; i++) {
  
  console.log(i);
  
}

var Persona = function(){
  this.nombre = "Marco";
  this.apellido = "Ruvalcaba";
  this.edad = 47;
};

var marco = new Persona();

Persona.prototype.direccion = "Av. Compositores 4550";

for (prop in marco) {
  // Con hasOwnProperty nos referimos a las propiedades que incluimos en nuestro objeto,
  // Por lo que el prototipo queda excluido.

    if (!marco.hasOwnProperty( prop )) {
      continue;
    }
    console.log(prop, ":", marco[prop]);
  }


  //forache
[1,2,3,4,5,6,true,8,9,false,"nombre"].forEach(val => {
  console.log(val);
});