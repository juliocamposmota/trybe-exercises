function countMostRepetedNumber(arrayNumbers) {
  let mostRepeted = 0;
  let repetitions = 0;
  let count = 0;
  
  for (let number in arrayNumbers) {
    count = 0;
  
    for (let numberTest in arrayNumbers) {
      if (arrayNumbers[number] === arrayNumbers[numberTest]) {
        count += 1;
      }
    }
  
    if (count > mostRepeted) {
      mostRepeted = arrayNumbers[number];
    }
  }

  return mostRepeted;
}

let arrayNumbersTest = [2, 3, 2, 5, 8, 2, 3];
let arrayNumbers1 = [2, 1, 2, 1, 1, 2, 1];
let arrayNumbers2 = [30, 30, 30, 40, 30, 50, 30, 30, 30];

console.log(countMostRepetedNumber(arrayNumbersTest));
console.log(countMostRepetedNumber(arrayNumbers1));
console.log(countMostRepetedNumber(arrayNumbers2));