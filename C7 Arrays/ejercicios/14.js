function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var resultado = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] > 10){
      resultado ++;
    }
  }
  return resultado;
}
console.log(contarElementosMayoresA10([1,2,34,45,66]));

module.exports = contarElementosMayoresA10;
