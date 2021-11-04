const multiplier = require('./exercicio1');

const getParameters = () => {
  let parameters = [];
  
  for (let i = 0; i < 3; i += 1) 
  parameters.push(Math.floor(Math.random() * 100 + 1));
  
  return parameters;
};

const randomMultiplier = async () => {
  const parameters = getParameters();

  try {
    const result = await multiplier(...parameters);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

randomMultiplier();
