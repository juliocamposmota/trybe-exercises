const { test, expect, describe } = require('@jest/globals');
const { sum } = require('./exercicio1');

describe('A função sum: ', () => {
  it('Retorna 9 ao receber 4 e 5', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Retorna 0 ao receber 0 e 0', () => {
    expect(sum(0 ,0)).toBe(0);
  });

  it('Retorna error ao receber qualquer parâmetro que não seja string', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });

  it('Retorna "parameters must be numbers" ao receber qualquer parâmetro que não seja string', () => {
    expect(() => { sum(4, '5') }).toThrow('parameters must be numbers');
  });
});
