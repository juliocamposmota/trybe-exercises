// Exemplo 1 - Criando um array de strings a partir de um array de objetos
console.log('\nExemplo 1');
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira', age: 18 },
  { firstName: 'João', lastName: 'Silva', age: 21 },
  { firstName: 'Antonio', lastName: 'Cabral', age: 16 },
];

const fullNamesFor = [];

// USANDO FOR
for (let index = 0; index < persons.length; index += 1) {
  fullNamesFor.push(`${persons[index].firstName} ${persons[index].lastName}, ${persons[index].age} anos.`);
}
console.log(fullNamesFor);

// USANDO MAP
const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}, ${person.age} anos.`);
console.log(fullNames);

// Exemplo 2 - Transformando números em negativos
console.log('\nExemplo 2');
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(`Lista de números: ${numbers}`);
console.log(`Lista negativa de números: ${negativeNumbers}`); // Retorna um array do mesmo tamanho que o array original.

// Exemplo 3 - Juntar dois arrays
console.log('\nExemplo 3');

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const createProductsList = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

console.log(createProductsList(products, prices));

// Exemplo 4
console.log('\nExemplo 4');
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

const allNameStudents = estudantes.filter((student) => (
  student.turno !== 'Tarde')).map((student) => `${student.nome}`);

console.log(allNameStudents);

const reportStatus = (name, students) => {
  const studentInfo = students.find((student) => student.nome === name);
  return studentInfo.materias.map((materia) => (
    `${materia.name} ${materia.nota >= 60 ? 'Aprovado' : 'Reprovado'}`
  ));
};

console.log(reportStatus('Mario', estudantes));