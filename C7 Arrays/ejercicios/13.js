function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  array_filtrado = [];
  for (var i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      array_filtrado.push(array[i])
    }
  }
  return array_filtrado;
}
console.log(filtrarNumerosPares([1,2,3,4,5,6]))
module.exports = filtrarNumerosPares;
