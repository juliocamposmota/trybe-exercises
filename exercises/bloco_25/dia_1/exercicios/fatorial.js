const readline = require('readline-sync');

const calculateFactorial = (n) => {
  if (n === 0) return 1;
  if (n === 1) return 1;
  return n * calculateFactorial(n - 1);
};

const getFactorial = () => {
  const numberToFactor = readline
    .questionInt('Informe um número inteiro positivo: ');

  if (numberToFactor <= 0) {
    return console.log('Apenas números inteiros positivos.');
  }

  const result = calculateFactorial(numberToFactor);

  console.log('-----------------');
  console.log(`Número: ${numberToFactor}`);
  console.log(`Resultado: ${result}`);
};

getFactorial();
