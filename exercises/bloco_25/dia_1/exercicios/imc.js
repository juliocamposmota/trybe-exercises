const readline = require('readline-sync');

const weight = readline.questionFloat('Qual seu peso(kg)? ');
const height = readline.questionInt('Qual sua altura(cm)? ');

const calculateImc = (weight, height) => {
  const imc = (weight / Math.pow(height / 100, 2)).toFixed(2);
  let situation;

  if (imc < 18.5) {
    situation = 'Abaixo do peso (magreza)';
  } else if (imc >= 18.5 && imc < 25) {
    situation = 'Peso normal';
  } else if (imc >= 25 && imc < 30) {
    situation = 'Acima do peso (sobrepeso)';
  } else if (imc >= 30 && imc < 35) {
    situation = 'Obesidade grau I';
  } else if (imc >= 35 && imc < 40) {
    situation = 'Obesidade grau II';
  } else if (imc > 40) {
    situation = 'Obesidade graus III e IV';
  }

  console.log('------------------------------------');
  console.log(`Peso: ${weight} || Altura: ${height}`);
  console.log(`IMC: ${imc}`);
  console.log(`Situação: ${situation}`);
  console.log('------------------------------------');

  return imc;
};

calculateImc(weight, height);
