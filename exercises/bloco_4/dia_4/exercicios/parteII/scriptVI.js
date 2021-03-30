function sumNumberComposition(n) {
  let sum = 0;
  
  for (let index = 1; index <= n; index += 1) {
    sum += index;
  }
  
  return sum;
}

let n1 = 2;
let n2 = 3;
let n3 = 4;
let n4 = 5;
let n5 = 6;

console.log(sumNumberComposition(n1));
console.log(sumNumberComposition(n2));
console.log(sumNumberComposition(n3));
console.log(sumNumberComposition(n4));
console.log(sumNumberComposition(n5));