// Exemplo1 - Array de numbers - Filtrando números pares.
const numbers = [19, 21, 30, 3, 45, 22, 15, 16];
const verifyEven = (number) => number % 2 === 0;
const isEven = numbers.filter(verifyEven);

console.log(isEven); // [ 30, 22 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);
console.log(isEven2);                                                       // Retorna uma array de numbers

// Exemplo 2 - Array de objetos - Filtrando idade menor que 18
const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
  arrayOfPeople.filter((people) => (people.age < 18))
);

console.log(verifyAgeDrive(objPeople));                                      // retorna uma array de objetos.

// Exemplo 3 - Array de strings - Filtrando exceto
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
   listStudents.filter((student) => student !== name);

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents);                                                 // retorna um array de strings