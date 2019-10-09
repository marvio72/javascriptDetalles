
//Solo aplica una vez en el tiempo restablecido en milisegundos.
setTimeout(() => {
  console.log("Pasaron 3 segundos");
  intervalo();
}, 3000);

function intervalo(){
var i = 1;
var seg;
var ciclo = setInterval(() => {
  if (i == 4) {
    clearInterval(ciclo);
  }
  if (i == 1) {
    console.log(i +" segundo");
  }else{
    console.log(i +" segundos");
  }
  i++; 
}, 1000);
}


var marco = {
  nombre: "Marco",
  apellido: "Ruvalcaba",
  edad: 47,
  imprimir: function(){
    var self = this;

    setTimeout(() => {
      console.log(self);
      console.log(self.nombre, self.apellido, self.edad);
    }, 8000);
  }
};

marco.imprimir();
