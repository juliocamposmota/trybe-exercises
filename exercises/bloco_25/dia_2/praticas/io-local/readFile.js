const fs = require('fs');
const fsp = require('fs').promises;

const fileName = 'my-file.txt';

// com callbacks
// fs.readFile(fileName, 'utf8', (err, data) => {
//   if (err) {
//     console.error(`Não foi possível ler o arquivo ${fileName}\n Erro: ${err}`);
//     process.exit(1);
//   }
//   console.log(`Conteúdo do arquivo:\n${data}`);
// });

// com promises
fsp.readFile(fileName, 'utf8')
  .then((data) => {
    console.log(`Conteúdo do arquivo:\n${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${fileName}\n Erro: ${err}`);
    process.exit(1);
  });
