const express = require('express');
const bodyparser = require('body-parser');

const PORT = 3001;

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

app.listen(PORT, () => {
  console.log('We are ON!');
});
