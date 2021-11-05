const fs = require('fs');

const writeInFiles = (conteudo, arquivo) => {
  if (typeof(conteudo) !== 'string' || typeof(arquivo) !== 'string')
    return 'dados informados inválidos';

  fs.writeFileSync(`${__dirname}/${arquivo}`, conteudo);
  return 'ok';
};

module.exports = writeInFiles;
