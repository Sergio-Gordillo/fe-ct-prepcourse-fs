function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  array_duplicado = [];
  for(var i = 0; i < array.length; i++){
    array_duplicado.push(array[i]);
    array_duplicado.push(array[i]);
  }
  
  return array_duplicado;
  
}
console.log(duplicarElementos([1,2,3]))
module.exports = duplicarElementos;
