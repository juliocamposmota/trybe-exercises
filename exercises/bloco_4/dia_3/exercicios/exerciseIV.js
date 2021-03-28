let n = 5;

if (n > 1) {
  for (let index = n; index > 1; index -=1) {
    if (index < 3) {
      break;
    } else {
      console.log(' '.repeat(index - 3) + '*'.repeat(n - (index - 1)) + '*'.repeat(n - index));
    }
  }
} else {
  console.log('n precisa ser maior que 1.');
}