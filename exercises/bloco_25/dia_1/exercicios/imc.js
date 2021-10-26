const weight = 80;
const height = 178;

const calculateImc = (weight, height) => {
  const imc = (weight / Math.pow(height / 100, 2)).toFixed(2);

  console.log(`Peso: ${weight} || Altura: ${height}`);
  console.log(`IMC: ${imc}`);

  return imc;
};

calculateImc(weight, height);
