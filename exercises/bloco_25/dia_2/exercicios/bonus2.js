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
  
  const fileContent = await fs.readFile(fileName, 'utf-8')
    .catch((error) => {
      console.error(`Erro ao ler o arquivo ${fileName}: ${error}`);
      return false;
    });

  if (!fileContent) return;

  const oldWord = await questionFile('Qual palavra deseja substituir? ');
  const newWord = await questionFile('Qual palavra deve ficar em seu lugar? ');

  const newContent = fileContent.replace(new RegExp(oldWord, 'g'), newWord);

  console.log(`Resultado da substituição: ${newContent}`);

  const path = await questionFile('Onde deseja salvar o resultado? ');

  await fs.writeFile(path, newContent);
}

start();