let grade = 49;

if (grade > 100 || grade < 0) {
  console.log("Nota inválida.");
} else if (grade >= 90) {
  console.log("Nota A");
} else if (grade < 90 && grade >= 80) {
  console.log("Nota B");
} else if (grade < 80 && grade >= 70) {
  console.log("Nota C");
} else if (grade < 70 && grade >= 60) {
  console.log("Nota D");
} else if (grade < 60 && grade >= 50) {
  console.log("Nota E");
} else if (grade < 50) {
  console.log("Nota F");
}