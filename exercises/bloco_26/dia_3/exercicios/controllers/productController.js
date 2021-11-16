const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();

  if (!products) {
    return res.status(500).send({ message: 'produtos não encontrados' });
  }

  res.status(200).json(products);
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await ProductModel.getById(id);
    res.status(200).json({product});
  } catch (error) {
    res.status(500).send({ message: 'produto não encontrado' });
  }
});

router.post('/', async (req, res) => {
  const { name, brand } = await req.body;

  try {
    const newProduct = await ProductModel.add(name, brand);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(404).send({ message: 'não foi possível criar novo produto' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send({ message: 'não foi possível deletar produto' });
  }
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const products = await ProductModel.update(req.params.id, name, brand);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send({ message: 'não foi possível atualizar produto' });
  }
});

module.exports = router;
