const assert = require('assert');
const wordLengths = words => {
  
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];
const output = wordLengths(words);

assert.strictEqual(typeof wordLengths, 'function');
// assert.deepStrictEqual(output, expected);