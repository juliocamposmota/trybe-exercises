// default destructuring
// const student = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// // const { nationality } = student;
// // console.log(nationality); // a desestruturação não pode ser realizada em uma posição inexistente.
// const { nacionalidade = 'Brazilian' } = student;
// console.log(nacionalidade);

// // o mesmo pode ser realizado ao desestruturar um array
// const position2d = [1, 2];
// const [x, y, z = 3] = position2d;
// console.log(x, y, z);

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson));
console.log(getNationality(person));
