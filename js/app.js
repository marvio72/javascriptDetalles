var persona = {
  nombre: "Marco",
  apellido: "Ruvalcaba",
  edad: 47,
  direccion: {
    pais: "México",
    ciudad: "Zapopan",
    edificio: {
      nombre: "Edificio Principal",
      telefono: "2222-3333"
    }
  }
}

console.log(persona.nombre);
console.log(persona.direccion.pais);

// AGREGAR UNA NUEVA PROPIEDAD
persona.direccion.zipcode = 45239;
console.log(persona.direccion);


console.log(persona.direccion.edificio.nombre);


// CREAR VARIABLE POR REFERENCIA PARA EVITAR ESCRIBIR TODOS LOS PARAMETROS 
var edificio = persona.direccion.edificio;
console.log(edificio.telefono);

// AGREGAMOS NUMERO DE PISO COMO NUEVA REFERENCIA
edificio.piso = 3;
console.log(edificio);
console.log(persona);

// NOTACION DE CORCHETES

console.log(persona["direccion"]["edificio"]["telefono"]);