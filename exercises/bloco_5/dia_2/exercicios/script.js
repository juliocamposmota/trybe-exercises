function createTextElements(tagElement, text) {
  let element = document.createElement(tagElement);
  element.innerText = text;

  return element;
}

function createElementWithClass(tagElement, className) {
  let element = document.createElement(tagElement);
  element.classList.add(className);
  
  return element;
}

function createList(tagElement, numberOfItens) {
  let list = document.createElement(tagElement);

  for (let index = 1; index <= numberOfItens; index += 1) {
    let listItem = document.createElement('li');
  
    list.appendChild(listItem);
  }

  return list;
}

let title = document.body.appendChild(createTextElements('h1', 'Exercício 5.2 - JavaScript DOM'));
let mainContent = document.body.appendChild(createElementWithClass('div', 'main-content'));
let centerContent = mainContent.appendChild(createElementWithClass('div', 'center-content'));
let paragraph = centerContent.appendChild(createTextElements('p', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '));
let leftContent = mainContent.appendChild(createElementWithClass('div', 'left-content'));
let rightContent = mainContent.appendChild(createElementWithClass('div', 'right-content'));
let image = leftContent.appendChild(createElementWithClass('img', 'small-image'));
image.setAttribute('src', 'https://picsum.photos/200');
let list = rightContent.appendChild(createList('ol', 10));

let stringNumbers = [
  'um',
  'dois',
  'três',
  'quatro',
  'cinco',
  'seis',
  'sete',
  'oito',
  'nove',
  'dez',
];

for (let index = 0; index < list.childElementCount; index += 1) {
  list.children[index].innerText = stringNumbers[index];
}

for (let i = 0; i < 3; i += 1) {
  let divElement = document.createElement('div');
  mainContent.appendChild(divElement);
}

title.classList.add('title');

let divElements = document.getElementsByTagName('div');
divElements[4].classList.add('description');
divElements[5].classList.add('description');
divElements[6].classList.add('description');

mainContent.removeChild(leftContent);

rightContent.style.marginRight = 'auto';

centerContent.parentNode.style.backgroundColor = 'green';

list.lastElementChild.remove();
list.lastElementChild.remove();