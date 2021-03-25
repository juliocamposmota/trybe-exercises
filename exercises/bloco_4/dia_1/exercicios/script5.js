let angle1 = 45;
let angle2 = 60;
let angle3 = -70;
let anglesSum = angle1 + angle2 + angle3;

let isTriangle;

if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
  console.log("Error ao declarar o valor de algum ângulo.")
}

if (anglesSum === 180) {
  isTriangle = true;
} else {
  isTriangle = false;
}

console.log(isTriangle);