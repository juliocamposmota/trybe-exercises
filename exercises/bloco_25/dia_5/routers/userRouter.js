const express = require('express');
const router = express.Router();

router.post('/register', (_req, res) => {
  res.status(201).json({ message: 'user created' });
});

module.exports = router;
