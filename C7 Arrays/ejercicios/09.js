function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   
   var min = 0;
   var max = array.length - 1;
   
   var indiceAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
   
   
   
   return array[indiceAleatorio];
   }
   
   
   



console.log(obtenerElementoAleatorio([1,2,3,4,5]))

module.exports = obtenerElementoAleatorio;
