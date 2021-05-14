// Spread Operator
const numbers = [2, 3, 4];
const moreNumbers = [1, ...numbers, 5, 6, 7];

// console.log(numbers);
// console.log(moreNumbers);

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months);

// const monthObjects = {
//   ...spring,
//   ...summer,
//   ...fall,
//   ...winter,
// }

// console.log(monthObjects);

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const imcInfo = [60, 1.7];
const user = {
  name: 'Júlio',
  imc: imc(...imcInfo),
}

// console.log(imc(...imcInfo));
// console.log(user);

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers));
// console.log(Math.min(...randomNumbers));

const patient = {
  age: 30,
  objective: 'Health',
}

const patientInfo = { ...user, ...patient};

// console.log(patientInfo);

const specialFruit = ['Banana', 'Manga', 'Morango'];
const additionalItens = ['Suco de laranja', 'Leite condensado', 'Aveia'];

const fruitSalad = (specialFruit, additionalItens) => {
  return [...specialFruit, ...additionalItens];
}

console.log(fruitSalad(specialFruit, additionalItens));