module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization || authorization.length !== 12)
      return res.status(401).json({ message: 'invalid token' });

    req.token = authorization;
    next();
  } catch(error) {
    next(error);
  }
};
