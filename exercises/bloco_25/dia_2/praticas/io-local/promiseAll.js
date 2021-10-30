const fs = require('fs').promises;

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
]).then(([file1, file2, file3]) => {
  const sizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
  console.log(`Leitura concluida. Registrado ${sizeSum} bytes lidos.`);
}).catch((err) => {
  console.error(`Erro ao ler arquivos: ${err.message}`);
});
