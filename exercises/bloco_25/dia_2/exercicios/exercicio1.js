const multiplier = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
    return reject('Informe apenas números');

    const result = (a + b) * c;

    if (result < 50) return reject('Valor muito baixo');

    resolve(result);
  });
};

// multiplier('1', 2, 3)
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error));

// multiplier(1, 2, 3)
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error));

// multiplier(11, 22, 33)
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error));

module.exports = multiplier;
