function lowerValueIndex(arrayNumbers) {
  let lowerValue = arrayNumbers[0];
  
  for (let index = 0; index < arrayNumbers.length; index +=1) {
    if (arrayNumbers[index] < lowerValue) {
      lowerValue = arrayNumbers[index];
    }
  }

  return arrayNumbers.indexOf(lowerValue);
}

let numbers1 = [1, 0, 27, 44, 32, 41];
let numbers2 = [15, 60, -47, 34, 52, 21];

console.log(lowerValueIndex(numbers1));
console.log(lowerValueIndex(numbers2));