let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
} 

for (let index in names) {
  console.log('Olá ' + names[index]);
}

let carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}

for (let propertie in carro) {
  console.log(propertie + ':', carro[propertie]);
}

for (let propertie in carro) {
  console.log('modelo: ' + carro.model + ', marca: ' + carro.manufacturer + ', ano: ' + carro.year);
}