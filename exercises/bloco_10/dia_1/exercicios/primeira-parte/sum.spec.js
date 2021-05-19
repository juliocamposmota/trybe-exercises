const { test, expect } = require('@jest/globals');
const { sum } = require('./sum');

test('Testa a função sum.', () => {
  expect(typeof sum).toBe('function');
  expect(sum(2, 3)).toBe(5);
});
