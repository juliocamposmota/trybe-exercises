const drawCheck = (numberBet, numberDrawn) => {
  if (numberBet !== numberDrawn) {
    return 'Tente novamente';
  } else {
    return 'Parabéns você ganhou';
  }
}

const bigDraw = (numberBet, callBack) => {
  const numberDrawn = Math.floor((Math.random() * 5) + 1);
  return callBack(numberBet, numberDrawn);
}

console.log(bigDraw(4, drawCheck));