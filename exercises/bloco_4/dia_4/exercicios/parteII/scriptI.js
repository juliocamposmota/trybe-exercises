function isPalindrome(word) {
  let backWord = '';
  
  for (let character = 0; character < word.length; character += 1) {
    backWord += word[(word.length - 1) - character];
  }

  if (backWord === word) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('arara'));
console.log(isPalindrome('gabrielle'));