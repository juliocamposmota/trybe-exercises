const joi = require('joi');
const jwt = require('jsonwebtoken');

const service = require('../services/User');

const { JWT_SECRET } = process.env;
const JWT_CONFIG = { expiresIn: '1h' };

const validateBody = (body) => joi.object({
  username: joi.string().min(5).alphanum().required(),
  password: joi.string().min(5).required(),
}).validate(body);

module.exports = async (req, res, next) => {
  const { error } = validateBody(req.body);
  
  if (error) return next(error);

  const { username, password } = req.body;

  const { error: serviceError, token } = await service.login(username, password);

  if (serviceError && serviceError.code === 'invalidCredentials') {
    return next({ statusCode: 401, message: serviceError.message });
  }

  if (serviceError) {
    return next(serviceError);
  }

  res.status(200).json({ token });
};