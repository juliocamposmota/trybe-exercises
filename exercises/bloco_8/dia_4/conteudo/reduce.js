// Exemplo 1 - Somar todos os valores de um array
const numbers = [32, 15, 3, 2, -5, 56, 10];

// Com FOR
let sumNumbersFor = 0; // A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!
for (let index = 0; index < numbers.length; index += 1) {
  sumNumbersFor += numbers[index];
}
console.log(sumNumbersFor);

// Com REDUCE
const sumNumbers1 = numbers.reduce((result, number) => result + number); // result é o acumulador da função e number o valor de cada elemento.
console.log(sumNumbers1);
// ou
const getSum = (result, number) => result + number;
const sumNumbers2 = numbers.reduce(getSum);
console.log(sumNumbers2);

// Exemplo 2- Passando um segundo parâmetro para o reduce
const sumNumbers3 = numbers.reduce(getSum, 10);
console.log(sumNumbers3);

// Exemplo 3 - Pegando o maior valor de um array com reduce
const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
const bigger = numbers.reduce(getBigger);
console.log(bigger);

// Exemplo 4 - Somar todos os números pares do array
const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const getSum2 = (sum, number) => sum + number;

const sumEvens = (array) => array.filter(getEven).reduce(getSum2);

console.log(sumEvens(numbers2)); // exemplo com reduce e filter

const sumEvens2 = (array) => array.reduce((sum, number) => (
  number % 2 === 0 ? sum + number : sum
));

console.log(sumEvens2(numbers2)); // exemplo só com reduce