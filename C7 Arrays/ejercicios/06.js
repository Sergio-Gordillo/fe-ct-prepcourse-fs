function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  array_ivertido = [];
  for (var i = array.length-1; i >= 0; i--){
    array_invertido.push(array[i]);
  }
  return array_ivertido;
}

console.log(invertirArray([1,2,3,4,5]))
module.exports = invertirArray;
