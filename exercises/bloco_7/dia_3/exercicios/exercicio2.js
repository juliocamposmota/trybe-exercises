const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

const expected = myRemove([1, 2, 3, 4], 3);

assert.deepStrictEqual(expected, [ 1, 2, 4 ], 'O elemento não foi retirado.');
assert.notDeepStrictEqual(expected, [1, 2, 3, 4], 'Seu resultado possui um elemento extra');

const list = [10, 9, 8, 7];
myRemove(list, 10);
assert.deepStrictEqual(list, [10, 9, 8, 7], 'teste');

const newExpected = myRemove([1, 2, 3, 4], 5);
assert.deepStrictEqual(newExpected, [1, 2, 3, 4], 'Algo de errado não está certo');