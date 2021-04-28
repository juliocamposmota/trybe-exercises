const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

let expected = sum(1, 2);
assert.strictEqual(expected, 3, '1 + 2 = 3');

expected = sum(0, 0);
assert.strictEqual(expected, 0, '0 + 0 = 0');

expected = sum(4, '5');