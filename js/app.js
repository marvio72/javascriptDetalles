var PI = Math.PI;
var E = Math.E;

console.log(PI);
console.log(E);

var num1 = 10.6323345;

console.log(num1);
console.log(Math.round(num1));
console.log(Math.floor(num1));

function numeroRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(numeroRandom(1,6));

console.log(Math.sqrt(9));

console.log(Math.pow(5,3));