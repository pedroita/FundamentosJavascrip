const user = {
  name: 'italo campos',
  email: 'jose@gmail.com',
  idade: 23,
  endereco: 'Rua x',
};

for (const key in user) {
  if (key === 'name' || key === 'email') {
    user[key] = user[key].toUpperCase();
  }
}

console.log(user);
