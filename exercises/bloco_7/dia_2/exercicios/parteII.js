const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1
const modifyObject = (object, key, value) => object[key] = value;
modifyObject(lesson2, 'turno', 'manhã');
console.log(lesson2);

// Exercício 2
const showObjectKeys = object => Object.keys(object);
console.log(showObjectKeys(lesson1));

// Exercício 3
const showObjectLength = object => Object.keys(object).length;
console.log(showObjectLength(lesson1));

// Exercício 4
const showObjectValues = object => Object.values(object);
console.log(showObjectValues(lesson1));
