function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if(num > 99 && num <1000){
    return true
  }else{
    return false
  }
}

function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  let numstring = toString(num);
  if(numstring.length == 3){
    return true;
  }else{
    return false
  }
}

module.exports = tieneTresDigitos;
