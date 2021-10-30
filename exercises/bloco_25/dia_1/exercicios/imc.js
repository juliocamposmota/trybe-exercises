const readline = require('readline-sync');

const weight = readline.question('Qual seu peso?');
const height = readline.question('Qual sua altura?');

const calculateImc = (weight, height) => {
  const imc = (weight / Math.pow(height / 100, 2)).toFixed(2);

  console.log(`Peso: ${weight} || Altura: ${height}`);
  console.log(`IMC: ${imc}`);

  return imc;
};

calculateImc(weight, height);
