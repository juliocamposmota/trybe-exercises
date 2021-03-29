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

let keys = [];
for (let propertie in info1) {
  keys.push(propertie);
}

for (let key = 0; key <= 3; key +=1) {
  console.log(info1[keys[key]] + ' e ' + info2[keys[key]]);
}