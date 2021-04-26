// Exercício 1
const fatorial = n => {
  let resp = n;

  if (n === 0) {
    resp = 1;
  } else {
    while (n > 2) {
      resp *= --n;
    }
  }

  return resp;
}

console.log(fatorial(6));

// Exercício 2

const longestWord = sentence => {
  let words = sentence.split(" ");
  let maxLength = 0;
  let result;

  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }

  return result;
}

console.log(longestWord('Fazem muitos anos que não vejo por ai um paralelepipedo'));

// Exercício 3
const counter = document.querySelector('p');

let clicks = 0;

document.querySelector('button')
.addEventListener('click', () => counter.innerHTML = clicks += 1 );

// Exercício 4

const hardSkills = ['JavaScript', 'HTML', 'CSS', 'React', 'Python'];

function skillList(nameParameter) {
  const replacer = name => (
    `Tryber ${name} aqui!
    
    Tudo bem?`
  )
  
  let result = `${replacer(nameParameter)}
    Minhas cinco principais habilidades são:`

  for (let index in hardSkills) {
    result = `${result}
    
    - ${hardSkills[index]}`
  }
  
  return result;
}

console.log(skillList('Júlio'));