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

// Passando um segundo parâmetro para o reduce
const sumNumbers3 = numbers.reduce(getSum, 10);
console.log(sumNumbers3);