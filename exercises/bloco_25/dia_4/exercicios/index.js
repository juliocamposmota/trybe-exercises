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

app.listen(PORT, () => {
  console.log('We are ON!');
});
