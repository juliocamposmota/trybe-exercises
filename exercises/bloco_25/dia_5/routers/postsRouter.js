const express = require('express');

const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
];

const router = express.Router();

router.get(
  '/:id',
  (req, res) => {
    const { id } = req.params;

    const post = posts.find((p) => p.id === parseInt(id));

    if (!post)
      return res.status(404).json({ statusCode: 404, message: 'post not found' });

    res.status(200).json(post);
  }
);

module.exports = router;
