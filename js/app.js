

function Persona(){
  this.nombre   = "Marco";
  this.apellido = "Ruvalcaba";
  this.edad     = 47;
  this.pais     = "México";

}

Persona.prototype.imprimirInfo = function(){
  console.log(this.nombre +" "+ this.apellido +" "+ "("+ this.edad +")");
}
var mar = new Persona();

console.log(mar);
mar.imprimirInfo();
