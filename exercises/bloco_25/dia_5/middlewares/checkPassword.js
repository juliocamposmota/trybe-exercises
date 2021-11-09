module.exports = (req, res, next) => {
  try {
    const { password } = req.body;

    if (!password || password.length < 4 || password.length > 8)
      return res.status(400).json({ message: 'invalid data' });

    req.password = password;
    next();
  } catch(error) {
    next(error);
  }
};
