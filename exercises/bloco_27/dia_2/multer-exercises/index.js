require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '/uploads')));

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'uploads')
  },
  filename: (_req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`)
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== 'image/png') {
    req.fileValidationError = true;
    return cb(null, false);
  }

  cb(null, true);
};

const upload = multer({ storage, fileFilter });

app.get('/ping', controllers.ping);

app.post(
  '/upload',
  upload.single('file'),
  controllers.uploadFile,
);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
