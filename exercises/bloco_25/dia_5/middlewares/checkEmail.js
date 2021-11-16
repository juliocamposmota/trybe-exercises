module.exports = (req, res, next) => {
  try {
    const { email } = req.body;
    const emailRegex = /^[a-z0-9._]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const emailTest = emailRegex.test(email);

    if (!email || email === '' || !emailTest)
      return res.status(400).json({ message: 'invalid data' });

    req.email = email;
    next();
  } catch(error) {
    next(error);
  }
};
