function crearCookie(nombre,valor){
  valor = escape(valor);

  //Crear una fecha de finalización
  var hoy = new Date();
  hoy.setMonth(hoy.getMonth()+1);

  document.cookie = nombre + "=" + valor + ";expires="+hoy.toUTCString()+";";
}

//Como funciona escape();
var demo = "123;123*123'123/ 123";

// console.log(demo);
// console.log(escape(demo));
// console.log(unescape(escape(demo)));


//Eliminar una cookie;
function borrarCookie( nombre ){
  
  var hoy = new Date();
  hoy.setMonth( hoy.getMonth()-1);
  
  document.cookie = nombre+"x;expires="+hoy.toUTCString()+";";
}

//Obtener la cookie
function getCookie( nombre ){

  var cookies = document.cookie;

  var cookieArr = cookies.split("; ");
  console.log(cookieArr);

  for (let i = 0; i < cookieArr.length; i++) {
    
    var parArr = cookieArr[i].split("=");
    // cookieArr[i] = parArr;

    if (parArr[0] === nombre) {
      return unescape( parArr[1]);
    }
    
  }

  return undefined;
}

console.log(getCookie("nombre"));

//Crear cookies
// crearCookie("nombre", "Violeta");
// crearCookie("correo", "vgonzalez@oversistemas.com");
// crearCookie("direccion", "Av. Compositores 4550");
// borrarCookie("nombre");
// document.cookie = "apellido=Ruvalcaba;";


// console.log(cookies); 