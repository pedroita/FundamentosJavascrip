const cargos = ['Professor', 'Aluno', 'Diretor'];

const usuarios = [
  {
    nome: 'Fabio',
    email: 'ddawe@gmai.com',
  },
  {
    nome: 'luiz',
    email: 'luiz@outlook.com',
  },
  {
    nome: 'Marcos',
    email: 'marcos@outlook.com',
  },
];

// solucao 1
const usuariosOutlook = usuarios.filter((usuario) => {
  const [, dominimodoemail] = usuario.email.split('@');
  return dominimodoemail === 'outlook.com';
});

const usuariosOutlook2 = usuarios.filter((usuario) => {
  return usuario.email.includes('outlook.com');
});

const usuariosOutlook3 = usuarios.filter(
  (usuario) => usuario.email.includes('outlook.com'));

console.table(usuariosOutlook);
console.table(usuariosOutlook2);
console.table(usuariosOutlook3);
