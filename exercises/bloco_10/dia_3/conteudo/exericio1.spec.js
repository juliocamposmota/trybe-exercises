const math = require('./math');

test("Se a função subtrair foi chamada", () => {
  math.subtrair = jest.fn();

  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
});