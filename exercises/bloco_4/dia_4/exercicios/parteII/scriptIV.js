function highestValueIndex(arrayNumbers) {
  let highestValue = 0;
  
  for (let index = 0; index < arrayNumbers.length; index +=1) {
    if (arrayNumbers[index] > highestValue) {
      highestValue = arrayNumbers[index];
    }
  }

  return arrayNumbers.indexOf(highestValue);
}

function biggerString(arrayString) {
  let arrayNumbers = [];
  
  for (let index = 0; index < arrayString.length; index +=1) {
    arrayNumbers.push(arrayString[index].length);
  }
  
  return arrayString[highestValueIndex(arrayNumbers)];
}

let passionFamily = ['Julio', 'Grabrielle', 'Vandja', 'Fernanda'];
let pokemons = ['Pikachu', 'Articuno', 'Moltres', 'Charizard'];

console.log(biggerString(passionFamily));
console.log(biggerString(pokemons));