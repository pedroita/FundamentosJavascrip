function somar (...numeros) {
  let resultado = 0;
  for (const numero of numeros) {
    resultado += numero;
  }
  return resultado;
}

const resultado1 = somar(2, 3, 63, 9, 52);
const resultado2 = somar(2, 3);

console.log('o resultado 1: ', resultado1, 'resultado 2: ', resultado2);
console.log(somar(99, 998, 999) + somar(2, 3, 3));
