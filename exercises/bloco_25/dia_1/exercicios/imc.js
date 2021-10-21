const calcImc = (weight, height) => {
  return weight / Math.pow(height, 2);
};

module.export = calcImc;
