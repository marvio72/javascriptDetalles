var fecha = new Date(2019,2,7);

Date.prototype.sumarDias = function(dias){
  this.setDate( this.getDate() + dias);
  return this;
};

Date.prototype.sumarAnio = function(anio){
  this.setFullYear( this.getFullYear() + anio);
  return this;
};

console.log(fecha);
console.log(fecha.sumarDias(10));
console.log(fecha.sumarAnio(20)); 