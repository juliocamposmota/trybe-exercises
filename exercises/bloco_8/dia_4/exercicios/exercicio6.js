const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const calcAverage = array => {
  return array.reduce((acc, curr) => acc + curr) / array.length;
}

function studentAverage(students, grades) {
  return nameAndAverage = students.map((student, index) => ({
    name: student,
    average: calcAverage(grades[index]),
  }))
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(students, grades), expected);
