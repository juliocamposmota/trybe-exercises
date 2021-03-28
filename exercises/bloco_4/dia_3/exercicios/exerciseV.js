let n = 7;
let space = n/2;

if (n > 1) {
  space += 0.5;

  for (let index = 1; index <= n; index +=2) {
    if (index === 1) {
      console.log(' '.repeat(space) + '*'.repeat(index));
      space -= 1;
    } 
    
    if (space > 0) {
      console.log(' '.repeat(space) + '*' + ' '.repeat(index) + '*');
      space -= 1;
    } 
    
    if (index === n) {
      console.log(' '.repeat(space) + '*'.repeat(index + 2));
      space -= 1;
    }
  }
} else {
  console.log('n precisa ser maior que 1.');
}