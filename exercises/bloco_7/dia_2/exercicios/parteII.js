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

// Exercício 5
console.log("All Lessons");
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// Exercício 6
console.log('Total de estudantes');
const sumStudents = object => {
  const array = Object.keys(object);
  let sum = 0;
  for (let index in array) {
    sum += object[array[index]].numeroEstudantes;
  }

  return sum;
}
console.log(sumStudents(allLessons));

// Exercício 7
console.log('Valor da chave');
const getValueByNumber = (object, number) => {
  const values = Object.values(object);
  const value = values[number];

  return value;
}
console.log(getValueByNumber(lesson1, 0));

// Exercício 8
console.log('Existe o par?');
const verifyPair = (object, key, value) => {
  let existPair = false;
  const keys = Object.keys(object);
  const values = Object.values(object);

  for (let index in keys) {
    if (keys[index] === key && values[index] === value) {
      existPair = true;
    }
  }

  return existPair;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
