function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   var resultado = 0;
   for(i = 0; i <= n; i ++){
      resultado = resultado + i;
      if(resultado > 100){
         break;
      }
   }
   return resultado;
}
console.log(sumarHastaNConBreak(50))
module.exports = sumarHastaNConBreak;
