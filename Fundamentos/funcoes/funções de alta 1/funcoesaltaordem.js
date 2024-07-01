const cargos = ['Professor', 'Aluno', 'Diretor'];

// cargos.push('Membro da Secretaria');

// console.log(cargos);

// cargos.pop();
// cargos.shift();

// console.log(cargos);
// cargos.unshift('Zevalado');
// console.log(cargos);

// cargos.splice(0, 2);
const indiceuser = cargos.indexOf('Diretor');
cargos.splice(indiceuser, 1);

console.log(indiceuser);

console.log(cargos);
