// Exemplo do MDN
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cerejas', quantity: 5}
];

function isCherries(fruit) {
  return fruit.name === 'cerejas';
}

const isBananas = (fruit) => fruit.name === 'bananas';

const isApples = inventory.find((fruit) => fruit.name === 'apples');

console.log(isCherries(inventory[2]));
console.log(isBananas(inventory[1]));

console.log(inventory.find(isCherries));
console.log(inventory.find(isBananas));
console.log(isApples);

// Exemplo course
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30


// Exemplo de aula
const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

// encontrar a primeira pessoa que não é motorista

const firstDriver = users.find((value) => value.isDriver === false );
console.log('O primeiro motorista é ', firstDriver);

const Maggie = users.find((person) => {
  person.firstName === 'Maggie'
});
console.log(Maggie);