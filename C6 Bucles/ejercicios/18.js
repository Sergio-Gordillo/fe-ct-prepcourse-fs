function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var resultado = 1;
  for (i = a; i <= b; i++){
     resultado = resultado * i;
}
return resultado
}

console.log(productoEntreNúmeros(1,10))
module.exports = productoEntreNúmeros;