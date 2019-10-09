
for_principal:
for (let i = 1; i <= 5; i++) {
  console.log("i: ", i);
  
    for_secundario:
    for (let w = 1; w <= 5; w++) {
      console.log("w: ", w); 

      for (let x = 1; x <= 5; x++) {
        console.log("x: ",x);

        break for_principal;
        
      }
    }

}