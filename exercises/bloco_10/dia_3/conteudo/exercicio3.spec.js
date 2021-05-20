const math = require('./math');

test('Se a função somar é chamada, o seu retorno e os parâmetros passados', () => {
  math.somar = jest.fn()
    .mockImplementation((a, b) => a + b);

  math.somar(1, 2);
  
  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});