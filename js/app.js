var i = 1;

while (i <= 10) {
  console.log(i);

  if (i === 5) {
    break;
  }
  i++;
}

var j = 0;
while (j <10) {
  j++;
  
  //Omite el cuatro pero continua con el siguiente.
  if(j === 4){
    continue;
  }
  console.log(j);
}


// El dowhile ejecuta por lo menos una vez el codigo y despues evalua si continua o no

var h = 0;

do {
   h++;

   console.log(h);  
} while (h<=10);