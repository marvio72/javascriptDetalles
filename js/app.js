var texto = "Hola Mundoooo\nQue Tal?";
console.log(texto);


var arr = texto.match( /a/);
console.log(arr);
arr = texto.match( /^H/);
console.log(arr);
arr = texto.match( /o$/);
console.log(arr);
arr = texto.match( /.../);
console.log(arr);
arr = texto.match(/[aeiou]/igm);
console.log(arr);
arr = texto.match(/o+/g);
console.log(arr);
arr = texto.match(/o{3,4}/g);
console.log(arr);


var texto1 = "Aeropuerto";
arr = texto1.match(/[aeiou]{2}/ig);
console.log(arr);

var texto2 = "La respuesta de la suma es: 45 + 60 = 105";
arr = texto2.match(/\d{1,}|respuesta/g);
console.log(arr);
