const readline = require('readline-sync');

const checkVictory = (randomNumber, userNumber) => {
  if (randomNumber !== userNumber) {
    console.log('----------------------------------');
    return console.log('não foi dessa vez :/');
  }
  return console.log('----------------------------------\nMãe Dinah é você?? \nParabéns! Você acertou :)');
};

const generateRandomNumber = () => {
  const randomNumber = parseInt(Math.random() * 10);
  return randomNumber;
};

const guessingGame = () => {
  console.log('----------------------------------');
  console.log('Bem vindo ao jogo de adivinhações!');
  console.log('----------------------------------');
  console.log('\nDúvido você acertar o numero que to pensando...');

  const userNumber = readline.questionInt('Adivinhe o número: ');
  const randomNumber = generateRandomNumber();
  
  checkVictory(randomNumber, userNumber);

  console.log('----------------------------------');
  const tryAgain = readline.question('Quer tentar mais uma vez (s/n)? ');

  if (tryAgain === 's') {
    guessingGame();
  }
};

guessingGame();
