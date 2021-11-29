module.exports = (req, res) => {
  res.status(200).json({ body: req.body, file: req.file });
};
