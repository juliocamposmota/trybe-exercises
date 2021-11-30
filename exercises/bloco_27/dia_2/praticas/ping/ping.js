const axios = require('axios');

axios
  .get('http://localhost:3000/ping')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
  })
  .catch((error) => console.log(error));

// Outras formas
axios
  .get('/user', { params: { ID: 12345 }})
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// Com métodos assíncronos
const getUser = async () => {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// POST
const body = {
  firstName: 'Fred',
  lastName: 'Flinstone',
};

axios
  .post('/user', body)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
