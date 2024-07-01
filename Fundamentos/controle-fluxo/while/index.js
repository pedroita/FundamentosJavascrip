const number = 3;

const number3 = 3;

function checkNumber () {
  if (number > number3) {
    console.log('-1');
  } else if (number3 > number) {
    console.log('numero 3 é maior');
    return -2;
  } else if (number === number3) {
    console.log('é igualllllllll');
    return 0;
  }
}

checkNumber();
