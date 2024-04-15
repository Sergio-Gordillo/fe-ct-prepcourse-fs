function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  return array.sort((a,b) => b-a);
}
console.log(ordenarArray([2,4,5,1,3]))
module.exports = ordenarArray;
