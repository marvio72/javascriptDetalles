

var objetoJS = {
  nombre: "Marco",
  edad: 47
};

console.log("Objeto literal", objetoJS);


//CONVERTIRLO A MODO JSON
var jsonString = JSON.stringify(objetoJS);

console.log("Estructura Jason", jsonString);

//CONVERTIRLO DE MODO JSON A OBJETO JS 

var objetoDesdeJson = JSON.parse(jsonString);

console.log("objetoDesdeJason", objetoDesdeJson);