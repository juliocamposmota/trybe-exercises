const express = require('express');
const bodyparser = require('body-parser');
const fs = require('fs');

const PORT = 3001;
const DATABASE = 'simpsons.json';

const app = express();
app.use(bodyparser.json());

app.get('/ping', (_req, res) => {
  return res.json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.json({ message: `Hello, ${name}` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age > 17) return res.json({ message: `Hello, ${name}` });
  return res.status(401).json({ message: 'Unauthorized' });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age }= req.params;
  return res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get('/simpsons', (_req, res) => {
  const data = fs.readFileSync(DATABASE);
  const characters = JSON.parse(data);

  if (!data) return res.status(500).json({
    message: 'ai caramba... something got wrong :/'
  });

  return res.status(200).json(characters);
});

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;

  const data = fs.readFileSync(DATABASE);
  const characters = JSON.parse(data);
  
  const character = characters.find((c) => c.id === id);

  if(!data) return res.status(404).json({
    message: 'ai caramba... character not found :/'
  });

  return res.status(200).json(character);
});

app.post('/simpsons', (req, res) => {
  const { id, name } = req.body;

  const data = fs.readFileSync(DATABASE);
  const characters = JSON.parse(data);

  const isExisting = characters.some((c) => c.id === id);
  
  if (isExisting) return res.json({ message: 'id already exists' });

  const newCharacter = { id, name };

  characters.push(newCharacter);
  fs.writeFileSync(DATABASE, JSON.stringify(characters));
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log('We are ON!');
});
