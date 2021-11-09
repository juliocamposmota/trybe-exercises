module.exports = (req, res, next) => {
  try {
    const { username } = req.body;

    if (!username || username.length < 4)
      return res.status(400).json({ message: 'invalid data' });

    req.username = username;
    next();
  } catch(error) {
    next(error);
  }
};
