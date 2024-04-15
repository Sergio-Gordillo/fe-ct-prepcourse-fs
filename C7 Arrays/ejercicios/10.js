function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for(var i = 0; i<array.length-1; i++){
    var word = array[i]
    var spliced = word.split('');

    if (spliced.length > 5){
      return word
    }
  }
}
var array = ["hola","Hola mundo","sergio","gordillo"];

console.log(obtenerPrimerStringLargo(array))
module.exports = obtenerPrimerStringLargo;
