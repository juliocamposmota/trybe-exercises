const multiplicador = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
    return reject('Informe apenas números');

    const result = (a + b) * c;

    if (result < 50) return reject('Valor muito baixo');

    resolve(result);
  });
};

multiplicador('1', 2, 3)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));

multiplicador(1, 2, 3)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));

multiplicador(11, 22, 33)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));
