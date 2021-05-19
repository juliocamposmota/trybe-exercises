const { test, expect, describe } = require('@jest/globals');
const { sum } = require('./exercicio1');

describe('A função sum: ', () => {
  it('Retorna 9 ao receber 4 e 5', () => {
    expect(sum(4, 9)).toBe(9);
  });
});
