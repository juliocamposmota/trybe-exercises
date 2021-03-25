let numeros = [1, 2, 3, 4, 5];
let word = 'Hello';
let arrayOfNumbers = [10, 20, 30];

for(let numero of numeros) {
  console.log(numero);
}

console.log('');

for(let letter of word) {
  console.log(letter);
}

console.log('');

for(let sum of arrayOfNumbers) {
  sum += 1;
  console.log(sum);
}

console.log('');
console.log(arrayOfNumbers);