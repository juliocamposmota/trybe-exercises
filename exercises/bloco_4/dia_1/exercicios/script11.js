let grossSalary = 10000.00;
let baseSalary;
let netSalary;
let INSS;
let IR;

console.log("Salário Bruto: R$" + grossSalary);

if (grossSalary < 0) {
  console.log("Salário inválido.")
} else if (grossSalary <= 1556.94) {
  INSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92 && grossSalary > 1556.94) {
  INSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82 && grossSalary > 2594.92) {
  INSS = grossSalary * 0.11;
} else {
  INSS = 570.88;
}

baseSalary = grossSalary - INSS;
console.log("Salário Base: R$" + baseSalary);

if (baseSalary <= 1903.98) {
  IR = 0;
} else if (baseSalary <= 2826.66 && baseSalary > 1903.98) {
  IR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05 && baseSalary > 2826.66) {
  IR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68 && baseSalary > 3751.05) {
  IR = (baseSalary * 0.225) - 636.13;
} else {
  IR = (baseSalary * 0.275) - 869.36;
}

netSalary = baseSalary - IR;
console.log("Salário Líquido: R$" + netSalary);