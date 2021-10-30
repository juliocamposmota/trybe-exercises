const multiplicador = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) return reject('Informe apenas números');

    const result = (a + b) * c;

    if (result < 50) return reject('Valor muito baixo');

    resolve(result);
  });
};

multiplicador('1', 2, 3);
