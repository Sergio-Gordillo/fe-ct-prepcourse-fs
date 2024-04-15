function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  array_mayusculas = [];
  for(var i = 0; i < array.length; i++){
    palabra = array[i];
    array_mayusculas.push(palabra.toUpperCase())
  }
  return array_mayusculas;
}

console.log(convertirStringAMayusculas(["sergio","gordillo"]))
module.exports = convertirStringAMayusculas;
