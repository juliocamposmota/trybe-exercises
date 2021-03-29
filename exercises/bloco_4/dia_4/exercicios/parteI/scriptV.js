let info1 = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let key = 0; key <= 3; key +=1) {
  console.log(info1['key'] + ' e ' + info2['key']);
}

console.log(info1.personagem + ' e ' + info2.personagem);
console.log(info1.origem + ' e ' + info2.origem);
console.log(info1.nota + ' e ' + info2.nota);
console.log(info1.recorrente + ' e ' + info2.recorrente);