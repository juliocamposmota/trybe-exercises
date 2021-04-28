// Testes Unitários --------|
const assert = require('assert'); // Sintaxe para incluir o módulo assert

// assert.strictEqual(50, 50); // Sem erros: 50 == 50
// assert.strictEqual(50, 70, '70 é diferente de 50'); // AssertionError: 50 == 70

// function division(x, y) {
//   return x / y;
// }

// const expected = division(9, 3);

// assert.equal(expected, '3', 'Nove dividido por três é igual a três');

// function add(a, b) {
//   return a + b;
// }

// const expected = add(1, 2);

// assert.ok(expected === 3, 'A ou B fora do intervalo'); // Checa se o primeiro argumento é verdadeiro
// assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
// assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)


// Throw ---------------|
// function division(x, y) {
//   if (y === 0) throw new Error('parameter y must not be 0');
//   return x / y;
// }

// assert.strictEqual(division(10, 2), 5); // OK
// assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK

const myFunction = () => {
  // Apenas declarar a funcão já passou no teste abaixo.
}

assert.strictEqual(typeof myFunction, 'function');
