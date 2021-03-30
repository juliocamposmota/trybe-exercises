function highestValueIndex(arrayNumbers) {
  let highestValue = 0;
  
  for (let index = 0; index < arrayNumbers.length; index +=1) {
    if (arrayNumbers[index] > highestValue) {
      highestValue = arrayNumbers[index];
    }
  }

  return arrayNumbers.indexOf(highestValue);
}

let numbers1 = [1, 0, 27, 44, 32, 41];
let numbers2 = [15, 60, 47, 34, 52, 21];

console.log(highestValueIndex(numbers1));
console.log(highestValueIndex(numbers2));