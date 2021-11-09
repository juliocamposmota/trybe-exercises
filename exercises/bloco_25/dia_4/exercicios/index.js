const express = require('express');

const app = express();

const PORT = 3001;

app.get('/ping', (_req, res) => {
  return res.json({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log('We are ON!');
});
