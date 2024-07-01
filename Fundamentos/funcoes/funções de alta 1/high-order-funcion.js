const cargos = ['Professor', 'Aluno', 'Diretor'];

// const cagosComFlexao = cargos.map(function trasformarCarggos (cargos) {
//   return cargos + '(a)';
// });

// console.log(cargos);
// console.log(cagosComFlexao);

// const cagosComFlexao = cargos.map((cargos) => {
//   return cargos + '(a)';
// });

const cagosComFlexao = cargos.map((cargos) => cargos + '(a)');

console.log(cargos);
console.log(cagosComFlexao);

const usuarios = [
  {
    nome: 'Fabio',
    email: 'ddawe@gmai.com',
  },
  {
    nome: 'luiz',
    email: 'luiz@gmai.com',
  },
  {
    nome: 'Marcos',
    email: 'marcos@gmai.com',
  },
];

// const usuariosComNomeDeUsuarios = usuarios.map(usuarios => {
//   return {
//     nome: usuarios.nome,
//     email: usuarios.email,
//     nomeDeUsuario: usuarios.email.split('@')[0],
//   };
// });

// const usuariosComNomeDeUsuarios = usuarios.map(usuarios =>
//   ({
//     nome: usuarios.nome,
//     email: usuarios.email,
//     nomeDeUsuario: usuarios.email.split('@')[0],
//   }),
// );

const usuariosComNomeDeUsuarios = usuarios.map(usuarios =>
  ({
    ...usuarios,
    nomeDeUsuario: usuarios.email.split('@')[0],
  }),
);

console.log(usuariosComNomeDeUsuarios);
