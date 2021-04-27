const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person, lastName);

console.log(clone);
console.log(person);

clone.name = 'Maria';

console.log('--------------');
console.log('Mudando a propriedade name através do objeto clone')
console.log(clone);
console.log(person);

person.lastName = 'Ferreira';

console.log('--------------');
console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone);
console.log(person);

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);
