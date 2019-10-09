

    function evento(arg){
      console.log("Me disparé");
      console.log(arg.x, arg.y);
    }


    var objeto = document.getElementById("objDemo");
    
    objeto.addEventListener("keypress",evento);

    var boton = document.getElementById("btnDemo");

    boton.addEventListener("click",evento);