var hoy = new Date();
var FMili = new Date(1569016817384);
var fFija = new Date(2019, 02, 07, 10, 55, 10, 1);


console.log(hoy);
console.log(FMili);
console.log(fFija);

console.log(hoy.getFullYear());
console.log(hoy.getMonth());
console.log(hoy.getDate());
console.log(hoy.getMinutes());
console.log(hoy.getSeconds());
console.log(hoy.getMilliseconds());

console.log(hoy.getTime());

// trabajar con fechas

var inicio = new Date();

for (let i = 0; i < 15000; i++) {
  console.log("Algo...");
}

var fin = new Date();

var duracion = fin.getTime() - inicio.getTime();
console.log(duracion, "milisegundos");
console.log(duracion / 1000, "segundos");
