const pets = [
  { animal: 'Dog', age: 15 },
  { animal: 'cat', age: 25 },
  { animial: 'cow', age: 20 },
  { animal: 'fish', age: 90 }];

const allAnimalAreOlde = pets.every(pet => pet.age > 1 / 12);

console.log(allAnimalAreOlde);
