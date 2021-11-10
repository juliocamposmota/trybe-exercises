const express = require('express');
const randomToken = require('random-token');

const router = express.Router();
const {
  checkName,
  checkEmail,
  checkPassword,
} = require('../middlewares');

router.post(
  '/register',
  checkName,
  checkEmail,
  checkPassword,
  (_req, res) => {
    res.status(201).json({ message: 'user created' })
  },
);

router.post(
  '/login',
  checkEmail,
  checkPassword,
  (_req, res) => {
    const token = randomToken(12);
    res.status(200).json({ token });
  },
);

module.exports = router;
