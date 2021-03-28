let n = 5;

if (n > 1) {
  for (let indexColumn = n; indexColumn >= 1; indexColumn -=1) {
    console.log(' '.repeat(indexColumn - 1) + '*'.repeat(n - (indexColumn - 1)));
  }
} else {
  console.log('n precisa ser maior que 1.');
}