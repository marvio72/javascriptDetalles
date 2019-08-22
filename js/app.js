var nombre = "Juan Carlos";

// El this es el objeto

var persona = {

  nombre: "Maria",
  apellido: "Dubon",
  imprimirNombre: function(){
    console.log(this.nombre + " " + this.apellido);
  },
  direccion: {
    pais: "México",
    obtenerPais: function(){

      var self = this;

      var nuevaDireccion = function(){
        
        console.log(self);
        console.log("La dirección es en " + self.pais);

      }

      nuevaDireccion();
    }
  } 
};

persona.nombre = "Marco";

persona.imprimirNombre();
persona.direccion.obtenerPais();