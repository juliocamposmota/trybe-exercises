let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let arithmeticAverage = 0;

for (let number of numbers) {
  sum += number;
}

arithmeticAverage = sum / numbers.length;
console.log('Média aritmética: ' + arithmeticAverage);