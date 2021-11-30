module.exports = (req, res) => {
  if (req.fileValidationError) {
    return res.status(403).send({ error: 'Extension must be `png`' });
  }
  res.status(200).json({ body: req.body, file: req.file });
};
