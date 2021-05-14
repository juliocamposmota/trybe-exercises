// Parâmetro rest
const quantosParams = (...args) => {
  console.log('Parâmetros: ', args);
  return `Comprimento: ${args.length}`;
}

const list = ['element1', 'element2'];
const numbers = [3, 4, 5];

console.log(quantosParams(1, 2, 3, 4, 5, 6));
console.log(quantosParams('string', null, [1, 2, 3], { }));
console.log(quantosParams(list));

const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1, 2));
console.log(sum(1, ...list, 2));
console.log(sum(1, 2, ...numbers));
