const express = require('express');
const userRouter = require('./routers/userRouter');
const btcRouter = require('./routers/btcRouter');
const postsRouter = require('./routers/postsRouter');

const PORT = 3000;
const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/btc', btcRouter);
app.use('/posts', postsRouter);

app.listen(PORT, () => console.log('Running...'));
