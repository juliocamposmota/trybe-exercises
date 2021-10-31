const fs = require('fs').promises;

const fileName = 'simpsons.json';

const showCharacters = async () => {
  try {
    const result = await fs.readFile(fileName, 'utf-8');
    const object = JSON.parse(result);
    const characters = object.map(({ id, name }) => `${id} - ${name}`);

    characters.forEach(char => console.log(char));
  } catch (error) {
    console.log(`Erro ao ler o arquivo ${fileName}`);
    console.log(error.message);
  }
};

showCharacters();

const showCharactersById = (id) => {
  return new Promise((resolve, reject) => {
    
  });
};
