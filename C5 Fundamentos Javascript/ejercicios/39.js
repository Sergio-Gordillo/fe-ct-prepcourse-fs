// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function numeroRandom() {
  // Genera un número al azar entre 0 y 1 y retórnalo.
  // Tu código:
  return Math.random()
}

module.exports = numeroRandom;

function mayorYMenor(num){
  if (num > 5 && num < 10) console.log(true);
  else console.log(false);
};

mayorYMenor(4);
mayorYMenor(8);

function mayorYPar(str){
if (str =="Sergio" || str.length < 3 ) console.log(true);
else console.log(false);
};

mayorYPar("Sergio");
