let n = 5;

// Opção 1
if (n > 1) {
  for (let indexRow = 1; indexRow <= n; indexRow +=1) {
    for (let indexColumn = 1; indexColumn <= n; indexColumn +=1) {
      process.stdout.write('*');
    }
  
    console.log('');
  }
} else {
  console.log('n precisa ser maior que 1.');
}

console.log('');

// Opção 2
// if (n > 1) {
//   for (let indexRow = 1; indexRow <= n; indexRow += 1) {
//     let write = [];
  
//     for (let indexColumn = 1; indexColumn <= n; indexColumn +=1) {
//       write += '*';
//     }
  
//     console.log(write);
//   }
// } else {
//   console.log('n precisa ser maior que 1.');
// }
