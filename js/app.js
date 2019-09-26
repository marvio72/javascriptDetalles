

var carro = {
  color: "Blanco",
  marca: "Mazda",
  imprimir: function(){
    var salida = this.marca +" - "+ this.color;
    return salida;
  }
};

var carro2 = {
  color: "Rojo",
  marca: "Toyota"
};

console.log(carro.imprimir());

var logCarro = function(arg1,arg2){

  console.log("Carro:", this.imprimir());
  console.log("Argumentos:", arg1, arg2);
  console.log("===============================");
};

var logModeloCarro = logCarro.bind( carro );

logModeloCarro("sosos","diididi");  

logModeloCarro.call( carro, "123", "456");
logModeloCarro.apply( carro, ["456", "789"]);

//funciones prestadas
// Podemos agarrar funciones de cualquier otro objeto que hayamos definido anteriorment

console.log(carro.imprimir.call(carro2));