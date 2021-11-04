const fs = require('fs').promises;

const fileName = 'my-file.txt';

fs.writeFile(
  fileName,
  'Senta que la vem textão!'
).then(() => {
  console.log('Arquivo escrito com sucesso.');
}).catch((err) => {
  console.log(`Não foi possível escrever no arquivo. Error: ${err.message}`);
});
