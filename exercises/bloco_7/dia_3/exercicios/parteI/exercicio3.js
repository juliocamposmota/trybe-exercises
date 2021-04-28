const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      // index -= 1;
      // len -= 1;
      console.log(array)
    }
  }

  return arr;
}

// implemente seus testes aqui
const array = [1, 2, 3, 4];
const list = [10, 9, 8, 7];
const expected = myRemoveWithoutCopy(array, 3);
const newExpected = myRemoveWithoutCopy([1, 2, 3, 4], 5);

assert.deepStrictEqual(expected, [ 1, 2, 4 ], 'O elemento não foi retirado.');
assert.notDeepStrictEqual(expected, [1, 2, 3, 4], 'Seu resultado possui um elemento extra');

myRemoveWithoutCopy(list, 10);
assert.deepStrictEqual(list, [9, 8, 7], 'teste');

assert.deepStrictEqual(newExpected, [1, 2, 3, 4], 'Algo de errado não está certo');