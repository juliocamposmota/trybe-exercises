const math = require('./math');

test("Se a função multiplicar foi chamada e possui retorno padrao o valor 10", () => {
  math.multiplicar = jest.fn().mockReturnValue(10)

  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
});
