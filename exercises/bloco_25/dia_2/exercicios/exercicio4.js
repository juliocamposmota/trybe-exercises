const fs = require('fs').promises;

const fileName = 'simpsons.json';
const newFileName = 'simpsonsFamily.json';

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

// showCharacters();

const showCharactersById = async (characterId) => {
  const characters = await fs
    .readFile(fileName, 'utf-8')
    .then((data) => JSON.parse(data));

  const result = characters
    .find((char) => char.id == characterId);

  if (!result) throw new Error('id não encontrado');

  console.log(result);
  return result
};

// showCharactersById(10);

const removeCharacters = async () => {
  const characters = await fs
    .readFile(fileName, 'utf-8')
    .then((data) => JSON.parse(data));

  const TEN = '10';
  const SIX = '6';

  const result = characters
    .filter(({ id }) => id != TEN && id != SIX);

  console.log(result);
  return result
};

// removeCharacters();

const createSimpsonsFamily = async () => {
  const characters = await fs
    .readFile(fileName, 'utf-8')
    .then((data) => JSON.parse(data));

  const familyArray = ['1', '2', '3', '4'];

  const result = characters
    .filter(({ id }) => familyArray.includes(id));

  console.log(result);

  await fs.writeFile(
    newFileName,
    JSON.stringify(result)
  ).then(() => console.log('Arquivo salvo.'));
};

// createSimpsonsFamily();

const addNelsonToSimpsons = async () => {
  const characters = await fs
    .readFile(fileName, 'utf-8')
    .then((data) => JSON.parse(data));

  const simpsons = await fs
    .readFile(newFileName, 'utf-8')
    .then((data) => JSON.parse(data));

  const nelsonId = '8';
  const result = characters
    .find(({ id }) => id == nelsonId);

  simpsons.push(result);

  console.log(simpsons);

  await fs.writeFile(
    newFileName,
    JSON.stringify(simpsons)
  ).then(() => console.log('Arquivo salvo.'));
};

// addNelsonToSimpsons();

const replaceNelsonForMaggie = async () => {
  const characters = await fs
    .readFile(fileName, 'utf-8')
    .then((data) => JSON.parse(data));

  const nelsonId = '8';
  const simpsons = await fs
    .readFile(newFileName, 'utf-8')
    .then((data) => JSON.parse(data))
    .then((data) => data.filter(({ id }) => id != nelsonId));

  const maggieId = '5';
  const maggie = characters
    .find(({ id }) => id == maggieId);

    
  simpsons.push(maggie);
  console.log(simpsons);

  await fs.writeFile(
    newFileName,
    JSON.stringify(simpsons)
  ).then(() => console.log('Arquivo salvo.'));
};

replaceNelsonForMaggie();
