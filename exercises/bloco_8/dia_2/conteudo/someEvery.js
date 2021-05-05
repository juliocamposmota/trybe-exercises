console.log('--- SOME ---');
console.log('Exemplo MDN');
function isBiggerThan10(element, index, array) {
  return element > 10;
}

console.log([2, 5, 8, 1, 4].some(isBiggerThan10));
console.log([12, 5, 8, 1, 4].some(isBiggerThan10));

const isBiggerThen5 = (element) => element > 5;

console.log([2, 5, 3, 1, 4].some(isBiggerThen5));
console.log([12, 5, 8, 1, 4].some(isBiggerThen5));
// ------------------------------------------------
console.log('Exemplo Course');
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false
// -------------------------------------------------
console.log('--- EVERY ---');
console.log('Exemplo MDN');
function isBigEnough(element, index, array) {
  return element >= 10;
}

console.log([12, 5, 8, 130, 44].every(isBigEnough));
console.log([12, 54, 18, 130, 44].every(isBigEnough));

const isSmallEnough = (element) => element <= 10;

console.log([10, 5, 8, 1, 4].every(isSmallEnough));
console.log([12, 54, 18, 130, 44].every(isSmallEnough));
// -------------------------------------------------
console.log('Exemplo Course');
const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));