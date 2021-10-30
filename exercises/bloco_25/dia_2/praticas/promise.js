// script para executar a leitura de um arquivo.
const fs = require('fs');

const readFilePromise = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
};

// consumindo promises
readFilePromise('./file.txt')
  .then((content) => {
    console.log(`Lido arquivo com ${content.byteLength} bytes`);
  })
  .catch((err) => {
    console.log(`Erro ao ler arquivo: ${err.message}`);
  });
