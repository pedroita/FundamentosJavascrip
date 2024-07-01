function climaAtual () {
  const climapossiveis = ['ensolarado', 'chuvoso', 'nevando'];
  const climasorteado = climapossiveis[Math.round(Math.random() * 2)];
  return `Hoje esta ${climasorteado}`;
}

const climaatualArrow = () => {
  const climapossiveis = ['ensolarado', 'chuvoso', 'nevando'];
  const climasorteado = climapossiveis[Math.round(Math.random() * 2)];
  return `Hoje esta ${climasorteado}`;
};
console.log(climaAtual());
console.log(climaAtual());
console.log(climaAtual());
console.log(climaAtual());
console.log(climaAtual());
console.log(climaAtual());
console.log(climaatualArrow());
