function checkEnding(word, ending) {
  let wordSize = word.length;
  let delta = (wordSize / 2);
  let wordEnding = word.slice(delta);
  
  return wordEnding.includes(ending);
}

let word1 = 'juliomotacampos';
let ending1 = 'campos';
let ending2 = 'pos';
let ending3 = 'jul';

let word2 = 'trybe';
let ending4 = 'be';

let word3 = 'joaofernando';
let ending5 = 'fernan';

console.log(checkEnding(word1, ending1));
console.log(checkEnding(word1, ending2));
console.log(checkEnding(word1, ending3));

console.log(checkEnding(word2, ending4));

console.log(checkEnding(word3, ending5));