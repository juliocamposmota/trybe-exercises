const express = require('express');
const plantsModule = require('./plants');

const app = express();

app.use(express.json());

app.get('/plants', (req, res) => {
  const plants = plantsModule.getPlants();
  res.send(plants);
});

app.get('/plant/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.getPlantById(id);
  res.send(plant);
});

app.post('/plant/', (req, res) => {
  const newPlant = req.body.plant;
  const plant = plantsModule.createNewPlant(newPlant);
  res.send(plant);
});

app.post('/plant/:id', (req, res) => {
  const { id } = req.params;
  const newPlant = req.body.plant;
  const plant = plantsModule.editPlant(id, newPlant);
  res.send(plant);
});

app.delete('/plant/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.removePlantById(id);
  res.send(plant);
});

app.get('/sunny/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.getPlantsThatNeedsSunWithId(id);
  res.send(plant);
});

app.listen(3001, () => {
  console.log('Ouvindo na porta 3001');
});
