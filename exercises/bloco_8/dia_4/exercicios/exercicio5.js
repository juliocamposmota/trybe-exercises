const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const checkWord = word => {
  return word.match(/a/gi).length;
}

function containsA(array) {
  const numbers = array.map((element) => checkWord(element));
  return numbers.reduce((acc, curr) => acc + curr);
}

assert.deepStrictEqual(containsA(names), 20);
