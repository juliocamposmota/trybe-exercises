const fs = require('fs').promises;

fs.writeFile(
  'my-file.txt',
  'Luke! Im your father.',
  { flag: 'wx' },
).then((data) => {
  console.log('Escrita realizada e arquivo salvo.');
}).catch((err) => {
  console.log('err');
});
