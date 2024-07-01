// const pets = ['Dog', 'cat', 'cow', 'fish'];

const pets = [
  { animal: 'Dog', age: 15 },
  { animal: 'cat', age: 25 },
  { animial: 'cow', age: 20 },
  { animal: 'fish', age: 90 }];

const peteindex = pets.findIndex(pet => pet.animal === 'cat');
const findPet = pets.find(pet => pet.animal === 'cat');

console.log(peteindex);
console.log(findPet);
