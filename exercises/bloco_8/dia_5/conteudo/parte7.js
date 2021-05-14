// default parameters
const greeting = (user = 'Usuário') => console.log(`Welcome ${user}!`);

greeting();

const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));
