let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let arithmeticAverage = 0;

for (let number of numbers) {
  sum += number;
}

arithmeticAverage = sum / numbers.length;

if (arithmeticAverage > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}