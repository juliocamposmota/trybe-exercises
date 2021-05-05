// Exemplos course
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
// food.sort();
console.log(food.sort());

const numbers = [1, 2, 4, 3, 5, 6, 7, 8, 9, 10];
const points = [40, 100, 1, 5, 25, 10];

numbers.sort((a, b) => a - b);
points.sort((a, b) => a -b);

console.log(numbers);
console.log(points);

// Exemplos MDN
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 }
];

items.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

console.log(items);