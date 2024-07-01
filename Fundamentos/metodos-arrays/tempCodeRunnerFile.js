const provasDeMatematicadaJosefina = [7.5, 4, 9];

let media = 0;
let soma = 0;
for (const prova of provasDeMatematicadaJosefina) {
  soma += prova;
}

media = soma / provasDeMatematicadaJosefina.length;

console.log(media);
