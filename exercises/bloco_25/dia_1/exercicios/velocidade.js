const readline = require('readline-sync');

const distance = readline.questionInt('Informe distância(m): ');
const time = readline.questionInt('Informe o tempo gasto(s)');

const calculateAverageSpeed = (distance, time) => {
  const averageSpeed = distance / time;

  console.log('------------------------------------');
  console.log(`Velocidade Média: ${averageSpeed} m/s`);
  console.log('------------------------------------');
};

calculateAverageSpeed(distance, time);
