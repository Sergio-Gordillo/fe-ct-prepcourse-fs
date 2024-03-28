function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
   var texto = string;
   var palindromo = "";
   for(i = string.length -1; i >=0; i--){
      palindromo = palindromo + string[i];
   }
   
   return texto === palindromo;
   
}

console.log(esPalindromo("este no es un palindromo"))

module.exports = esPalindromo;
