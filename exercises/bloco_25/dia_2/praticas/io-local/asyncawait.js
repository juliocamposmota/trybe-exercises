const fs = require('fs').promises;

const fileName = 'my-file.txt';

const main = async () => {
  try {
    await fs.writeFile(fileName, 'Textão textão textão');
    console.log('Escrita realizada com sucesso');
  } catch (err) {
    console.error(`Erro ao escrever no arquivo ${fileName}. Error: ${err.message}`);
  }
};

main();
