let a = 100;
let b = 10;
let c = 10;

if (a > b && a > c) {
  console.log("Maior valor: " + a + " | Variável A");
} else if (b > a && b > c) {
  console.log("Maior valor: " + b + " | Variável B");
} else if (c > a && c > b) {
  console.log("Maior valor: " + c + " | Variável C");
} else if (a === b && a === c) {
  console.log("Todas as variáveis possuem o mesmo valor!");
} else if (a === b && a !== c) {
  console.log("Maior valor: " + a + " e " + b + " | Variáveis A e B");
} else if (a === c && a !== b) {
  console.log("Maior valor: " + a + " e " + c + " | Variáveis A e C");
} else {
  console.log("Maior valor: " + b + " e " + c + " | Variáveis B e C");
}