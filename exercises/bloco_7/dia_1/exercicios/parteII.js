// Exercício 1
const fatorial = n => {
  let resp = n;

  if (n === 0) {
    resp = 1;
  } else {
    while (n > 2) {
      resp *= --n;
    }
  }

  return resp;
}

console.log(fatorial(6));

// Exercício 2

const longestWord = sentence => {
  let words = sentence.split(" ");
  let maxLength = 0;
  let result;

  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }

  return result;
}

console.log(longestWord('Fazem muitos anos que não vejo por ai um paralelepipedo'));

