// Conteúdo - Formas de Adicionar novas propriedades e como associar chaves e valores a variáveis.
const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

const customer3 = {
  firstName: 'Harry',
  age: 23,
  job: 'Wizard',
};

customer1['lastName'] = 'Silva';

customer2.lastName = 'Ferreira';

let lastNameKey = 'lastName';
let lastNameValue = 'Potter';
customer3[lastNameKey] = lastNameValue;

let fullNameKey = 'fullName';
let fullNameValue = `${customer3.firstName} ${customer3.lastName}`;
customer3[fullNameKey] = fullNameValue;

// Prática - Crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. 
// O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

function objectCreator(object, key, value) {
  object = {}
  object[key] = value;
  return object
}

const customer4 = objectCreator('costumer4', 'firstName', 'Rony');

lastNameValue = 'Weasley';

customer4.age = 24;
customer4['job'] = 'Wizard';
customer4[lastNameKey] = lastNameValue;
customer4[fullNameKey] = `${customer4.firstName} ${customer4.lastName}`;

console.log(customer1);
console.log(customer2);
console.log(customer3);
console.log(customer4);