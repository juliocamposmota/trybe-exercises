const { test, expect } = require('@jest/globals');
const math = require('./math');

test('Se a função dividir é chamada, seu retorno padrão, quantas vezes foi chamada e seus respectivos retornos: ', () => {
  const mockDividir = jest
    .spyOn(math, 'dividir')
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);

  mockDividir(6, 2);
  expect(mockDividir).toHaveBeenCalled();

  expect(mockDividir()).toBe(5);
  expect(mockDividir()).toBe(15);
  expect(mockDividir()).toBe(15);
  expect(mockDividir).toHaveBeenCalledTimes(4);
  expect(mockDividir).toHaveBeenCalledWith(6, 2);
})

