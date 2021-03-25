let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
let searchForFirstTask = tasksList[0];
let searchForLastTask = tasksList[tasksList.length - 1];
let indexOfTask = tasksList.indexOf('Reunião');

tasksList.push('Fazer exercícios da Trybe');
tasksList.push('Finalizar o projeto Lessons Learned');
tasksList.unshift('Botar comida dos filhotes');
tasksList.unshift('Desligar o despertador');
tasksList.pop();
tasksList.shift();

console.log(searchForFirstTask);
console.log(searchForLastTask);
console.log(tasksList);
console.log(indexOfTask);
