

var nota = 78;

if(nota >= 90){
   
  console.log("A");

}else if ( nota >= 80){

  console.log("B");

}else if ( nota >= 70){

  console.log("C");

}else if ( nota >= 60){

  console.log("D");

}else{

  console.log("F");

}


var a = 10;
var b = 20;


var c = (a > b ) ? a : b ;
console.log(c);

var c = (a > b) ? function(){
  console.log("A es mayor a B");
  return a;
}() : function(){
  console.log("B es mayor a A");
  return b;
}();

console.log(c);

var x = 10;
var y = undefined;

c = x || y;
console.log(c);


function getNombre(nombre){
  var nomb = null || null || null || undefined || 123;

  console.log(nomb);
}

getNombre();