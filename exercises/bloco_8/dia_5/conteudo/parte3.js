const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const values = Object.values(product); // uma forma de fazer
console.log(values);

const { name, seller } = product;
console.log(name);
console.log(seller);

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: nome, b: turma, c: disciplina } = student;
console.log(nome, turma, disciplina);

const printProductDetails = ({name, price, seller}) => {
  console.log(`Promoção! ${name} por apenas R$${price}, só na ${seller}`)
}

printProductDetails(product);