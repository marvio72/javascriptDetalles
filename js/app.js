
var arr = [5,4,3,2,1];

console.log(arr[0], arr[4]);

console.log(arr.reverse());

//Crea la cantidad elevada al cuadrado
arr = arr.map(function(elem){
  elem *= elem;
  return elem;
});
console.log(arr);

// Extrae la raiz cuadrada el valor anterior
arr = arr.map( Math.sqrt);
console.log(arr);

// Une todos los elementos en un string con la separación que nosotros le indiquemos
arr = arr.join("|..");
console.log(arr);

// Lo contrario a join solo que cada uno de los elementos los devuelve como string
arr =  arr.split("|..");
console.log(arr);

// Agrega un elemento a la ultima posición del arreglo
arr.push("6");
console.log(arr);

//Ingresa un elemento en la primera posicion del arreglo
arr.unshift("0");
console.log(arr);

// Es lo mimso que arr.split() pero mas rápido;
console.log(arr.toString());

//Con este comando eliminamos el ultimo elemento pero la variable nos indica que elemento fue el eliminado
var elimine = arr.pop();
console.log(arr, elimine);

//seleccionamos la posición 1, de ahí no borramos nada(0) pero introducimos el valor 10,20 y 30 despues
// de la posicion 1
// Podemos borrar elementos a partir de la posicion que le indiquemos por ejemplo
// arr.splice(1,3,"10"); esto borra los 3 elementos depues de la posicion 1 e introduce 10,20 y 30.
arr.splice(1, 0, "10","20","30");
console.log(arr);

//slice es lo contrario a splice, le podemos indicar un rango para que nos muestre los elementos
arr = arr.slice(3,7);
console.log(arr);