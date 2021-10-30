const multiplier = require('./exercicio1');

const randomMultiplier = () => {
  let parameters = [];
  for (let i = 0; i < 3; i += 1) 
  parameters.push(Math.floor(Math.random() * 100 + 1));

  return multiplier(...parameters)
    .then((resolve) => console.log(resolve))
    .catch((error) => console.log(error));
};

randomMultiplier();
