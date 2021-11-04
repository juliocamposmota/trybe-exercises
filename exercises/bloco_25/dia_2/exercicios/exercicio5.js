const fs = require('fs').promises;

async function createFilesByArray() {
  const strings = [
    'Finalmente',
    'estou',
    'usando',
    'Promise.all',
    '!!!'
  ];

  const writePromises = strings.map((string, i) => {
    fs.writeFile(`file${i + 1}.txt`, string);
  });

  await Promise.all(writePromises)
    .then(() => console.log('arquivos criados com sucesso'));

  const files = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt'
  ];

  const contents = await Promise.all(
    files.map((file) => fs.readFile(file, 'utf-8')));

  const newContent = contents.join(' ');
  fs.writeFile('./fileAll.txt', newContent)
    .then(() => console.log('novo arquivo criado com sucesso.'));
}

createFilesByArray();
