const readline = require('readline');
const fs = require('fs').promises;

const { stdin: input, stdout: output } = require('process');

function questionFile(message) {
  const rl = readline.createInterface({ input, output });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      console.log(`Lendo ${answer}...`);
      rl.close();
      resolve(answer);
    });
  });
}

async function start() {
  const fileName = await questionFile('Qual arquivo deseja ler? ');

  try {
    const fileContent = await fs.readFile(fileName, 'utf-8');
    console.log(fileContent);
  } catch (error) {
    console.log('Arquivo inexistente');
  }
}

start();
