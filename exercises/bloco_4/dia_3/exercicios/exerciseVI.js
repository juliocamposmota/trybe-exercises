let number = 7;
let isPrime = true;

for (let index = 2; index < number; index += 1) {
  if (number % index === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime === true) {
  console.log(number + ' | É um número primo.');
} else {
  console.log(number + ' | Não é um número primo.');
}