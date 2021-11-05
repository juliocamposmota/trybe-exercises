const express = require('express');

const PORT = 3001;

const app = express();

app.get('/hello', handleRequest);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));

function handleRequest(req, res) {
  res.statusa(200).send('Hello World');
}
