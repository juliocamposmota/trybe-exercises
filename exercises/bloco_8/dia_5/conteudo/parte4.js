// array destructuring
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);
console.log(fourthCountry);
console.log(...arrayCountries);

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Leia-se: O segundo elemento do array saudacoes é uma função que recebe o primeiro elemento do array saudacoes.

const [mensagem, realizaSaudacao] = saudacoes; // Utilizando array destructuring
realizaSaudacao(mensagem);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal]
console.log(comida, animal, bebida);

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
[,,, ...numerosPares] = numerosPares
console.log(numerosPares);
