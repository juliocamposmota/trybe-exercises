let n = 5;
let write = '';

// Opção 1
if (n > 1) {
  for (let index = 1; index <= n; index +=1) {
    write += '*';
    console.log(write);
  }
} else {
  console.log('n precisa ser maior que 1.');
}

console.log('');

// Opção 2
// if (n > 1) {
//   for (let index = 1; index <= n; index += 1) {
//     console.log('*'.repeat(index));
//   }
// } else {
//   console.log('n precisa ser maior que 1.');
// }