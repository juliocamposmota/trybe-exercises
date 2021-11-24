const joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const JWT_CONFIG = { expiresIn: '1h' };

const validateBody = (body) => joi.object({
  username: joi.string().min(5).alphanum().required(),
  password: joi.string().min(5).required(),
}).validate(body);

module.exports = (req, res, next) => {
  const { error } = validateBody(req.body);

  if (error) return next(error);

  const payload = {
    username: req.body.username,
    admin: false,
  };

  const token = jwt.sign(payload, JWT_SECRET, JWT_CONFIG);
  
  res.status(200).json({ token });
};