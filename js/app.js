

function identifica( param ){
  console.log(typeof param);
  console.log(param instanceof Persona);
}

function Persona(){
  this.nombre = "Marco";
  this.edad = 30;
}

var marco = new Persona();

identifica(marco);