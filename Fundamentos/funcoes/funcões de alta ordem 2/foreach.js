const pets = ['Dog', 'cat', 'cow', 'fish'];

// const pluralPest = pets.map(pet => `${pet}s`);
const pluralPest = [];
pets.forEach(pet => {
  pluralPest.push(`${pet}s`);
});

console.log(pluralPest);
