const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

const inOneArray = (acc, curr) => acc.concat(curr);

function flatten(array) {
  return array.reduce(inOneArray, []);
}

console.log(flatten(arrays));
assert.deepStrictEqual(flatten(arrays), ['1', '2', '3', true, 4, 5, 6]);