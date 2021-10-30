const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de Adivinhação', script: './sorteio.js' },
  { name: 'Calculando Fatorial', script: './fatorial.js' },
];

let message = scripts.map((script, i) => {
  return `${i + 1} - ${script.name}`;
});

message = message.join('\n');
console.log(message);

const scriptNumber = readline.questionInt('Escolha um script pelo número: ') - 1;
const script = scripts[scriptNumber];

if(!script) return console.log('Script inválido. Fui...');

require(script.script);
