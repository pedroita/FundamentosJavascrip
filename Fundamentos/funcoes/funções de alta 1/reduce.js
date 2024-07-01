const provasDeMatematicadaJosefina = [7.5, 4, 9];

let media = 0;
let soma = 0;
for (const prova of provasDeMatematicadaJosefina) {
  soma += prova;
}

media = soma / provasDeMatematicadaJosefina.length;

console.table(media.toFixed(2));

const somaDasProvas = provasDeMatematicadaJosefina.reduce((acc, prova) => {
  return acc + prova;
}, 0);

const mediadasprovas = somaDasProvas / provasDeMatematicadaJosefina.length;

console.log(somaDasProvas);
console.log(mediadasprovas.toFixed(2));
