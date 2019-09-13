function crearProducto(nombre, precio){

  nombre = nombre || "sin nombre";
  precio = precio || 0;

  console.log("Producto: ", nombre, " Precio: ", precio);
}

function crearProducto100(nombre) {
  crearProducto(nombre, 100);
}

function crearProductoCamisa(precio) {
  crearProducto("Camisa", precio);
}
crearProducto("pinzas", 10);
crearProducto100("Corrector");
crearProductoCamisa(78);