const fs = require('fs');

function leAqruivo(nomeArquivo) {
  try {
    const conteudo = fs.readFileSync(nomeArquivo, 'utf-8');

    return conteudo;
  } catch (error) {
    return null;
  }
}

module.exports = leAqruivo;
