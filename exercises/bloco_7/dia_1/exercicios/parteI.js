// EXERCICIO 1

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)!`;
    ifScope = `${ifScope} \nÓtimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora do meu escopo (else)`;
    console.log(elseScope);
  }

  const outIfElseScope = `Tô fora do IF/ELSE, mas daqui não saio.`;
  console.log(outIfElseScope);
}

testingScope(false);

// EXERCICIO 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const growingOrder = (a, b) => {
  oddsAndEvens.sort(function(a, b){ return a - b; });
  return `Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`
}

console.log(growingOrder());