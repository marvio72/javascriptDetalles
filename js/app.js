

var a = new String("Marco Rafael Ruvalcaba Espinoza");

console.log(a);

console.log(a.toUpperCase());
console.log(a.toLowerCase());

var i = a.indexOf("Ruvalcaba");
console.log("La letra esta: " +  i);

i = a.lastIndexOf("n");
console.log("La letra esta: " +  i);

var nombre = a.substr(6,3);
console.log(nombre);

nombre = a.substr(0,a.indexOf(" "));
console.log(nombre);


var split = a.split(" ");
console.log(split);
console.log(split.length);


//Funciones viejas

function estilo(cadena){
  return document.write(cadena);
}

estilo(a.bold());
estilo(a.blink());
estilo(a.italics());
estilo(a.strike());


