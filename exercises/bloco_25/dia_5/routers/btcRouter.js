const express = require('express');
const axios = require('axios');

const router = express.Router();
const { checkToken } = require('../middlewares');

const ENDPOINT = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

router.get(
  '/price',
  checkToken,
  async (_req, res) => {
    const result = await axios.get(ENDPOINT);
    res.status(200).json(result.data);
  }
);

module.exports = router;
