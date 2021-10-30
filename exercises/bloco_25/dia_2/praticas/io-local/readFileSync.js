const fs = require('fs');

const fileName = 'my-file.txt';

try {
  const data = fs.readFileSync(fileName, 'utf8');
  console.log(data);
} catch (err) {
  console.log(`Error ao ler aqruivo: ${err.message}`);
  console.log(err);
}
