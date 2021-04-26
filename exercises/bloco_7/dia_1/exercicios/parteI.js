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