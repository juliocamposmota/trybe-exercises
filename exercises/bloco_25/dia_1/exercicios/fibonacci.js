const readline = require('readline-sync');

const calcFibo = (num, fiboList = [1]) => {
  if (num > fiboList.length) {
    if (fiboList.length === 1) fiboList.push(2);
    const nextValue = fiboList[fiboList.length - 1] + fiboList[fiboList.length - 2];
    fiboList = calcFibo(num, [...fiboList, nextValue]);
  }

  return fiboList;
};

const getFibo = () => {
  const numToFibo = readline
    .questionInt('Informe um número inteiro positivo: ');

  if (numToFibo <= 0) {
    return console.log('Apenas números inteiros positivos.');
  }

  const result = calcFibo(numToFibo);

  console.log('-----------------');
  console.log(`Número: ${numToFibo}`);
  console.log(`Resultado: ${result}`);
};

getFibo();