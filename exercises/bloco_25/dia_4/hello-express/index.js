const express = require('express');
const bodyparser = require('body-parser');
const sortByName = require('./functions/sortByName');

const app = express();
app.use(bodyparser.json());
const PORT = 3001;

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/recipes', function (req, res) {
  const sortedRecipes = sortByName(recipes);
  res.json(sortedRecipes);
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const recipe = recipes.filter((r) => (
    r.name.includes(name)  
    && r.price < parseInt(maxPrice) 
    && r.price > parseInt(minPrice)
  ));

  res.status(200).json(recipe);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

  res.status(200).json(recipe);
});

app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!' });
});

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.get('/drinks', function (req, res) {
  const sortedDrinks = sortByName(drinks);
  res.json(sortedDrinks);
});

app.get('/drinks/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const drink = drinks.filter((r) => (
    r.name.includes(name)
    && r.price < parseInt(maxPrice)
    && r.price > parseInt(minPrice)
  ));

  res.status(200).json(drink);
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found' });

  res.status(200).json(drink);
});

app.post('/drinks', function (req, res) {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: 'Drink created successfully!' });
});

app.put('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

app.delete('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
});
