const express = require('express');
const userRouter = require('./routers/userRouter');
const {
  checkEmail,
  checkName,
  checkPassword,
} = require('./middlewares');

const PORT = 3000;
const app = express();

app.use(express.json());

app.use(
  '/user',
  checkName,
  checkEmail,
  checkPassword,
  userRouter
);

app.listen(PORT, () => console.log('Running...'));
