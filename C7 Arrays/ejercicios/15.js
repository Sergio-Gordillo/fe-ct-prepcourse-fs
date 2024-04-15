function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  return array.indexOf(Math.max(...array));

}
console.log(encontrarIndiceMayor([1,2,3,100,4,5,6,7]))

module.exports = encontrarIndiceMayor;
