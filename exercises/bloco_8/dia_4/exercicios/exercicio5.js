const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  
}

const palavra = 'Aanemarie';
const letra = 'a';
let quantidade = 0

for (let index = 0; index < palavra.length; index += 1) {
  if (palavra[index] === letra || palavra[index] === letra.toUpperCase()) {
    quantidade++
  }
}

console.log(quantidade);

// assert.deepStrictEqual(containsA(), 20);
