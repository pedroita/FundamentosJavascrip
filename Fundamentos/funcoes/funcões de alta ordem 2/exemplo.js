const prompt = require('prompt-sync')();
// 1. castro de usuarios
// 2. Pesquisa usuario por email
// 3. adicionar modalidade
// 4. deletar user

let option;

const users = [];
function showMenu () {
  console.log(
    '0. Sair\n',
    '1. Cadastrar Usuarios\n',
    '2. Pesquisar Usuario por CPF\n',
    '3  Adicioanar Modalidade\n',
    '4. Deletar Usuario\n',
  );
}

function registreUser () {
  const name = prompt('Digite o nome do usuario: ');
  const cpf = prompt('Digite o cpf do usuario; ');
  if (users.find(user => user.cpf === cpf)) {
    console.log('Erro usuario ja existe');
    return;
  }
  users.push({ name, cpf });
}

function pesquisarUser () {
  const cpf = prompt('Digite o cpf do usuario que dejesa pesquisar:  ');
  const pesquisarusuarioencontrado = users.find(user => user.cpf === cpf);
  if (pesquisarusuarioencontrado) {
    console.log('user encontrado');
    console.log(`Nome: ${pesquisarusuarioencontrado.name}`);
    return pesquisarusuarioencontrado;
  }
  console.log('usuario não encontrado');
}
function addModalidade () {
  const founduser = pesquisarUser();
  if (!founduser) {
    return;
  }
  const sport = prompt('Entre com o sport a adicioanr para usuarios');
  const newUser = users.map(user => {
    if (user.cpf === founduser.cpf) {
      return {
        ...user,
        sport: [...user.sports, sport],
      };
    }
  });
  return user;
}
function deleteUser () {}
do {
  showMenu();
  option = parseInt(prompt('Escolha um opção : 0 a 4): '));
  if (option === 1) {
    registreUser();
  } else if (option === 2) {
    pesquisarUser();
  } else if (option === 3) {
    addModalidade();
  } else if (option === 4) {
    deleteUser();
  } else {
    console.log('saindo...');
  }
} while (option !== 0);
