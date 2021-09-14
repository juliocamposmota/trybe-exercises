export const generateRandomNumber = () => {
  return Math.floor(Math.random() * (100))
}

export const checkMultiple = (number) => {
  return number % 3 === 0 || number % 5 === 0;
}
