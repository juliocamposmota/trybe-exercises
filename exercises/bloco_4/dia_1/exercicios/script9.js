let a = 3;
let b = 70;
let c = 10;
let isValid;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
  isValid = true;
} else {
  isValid = false;
}

console.log(isValid);