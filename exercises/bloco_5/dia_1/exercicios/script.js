let textTags = document.getElementsByTagName('p');
let mainClasses = document.getElementsByClassName('main-content');
let centerClasses = document.getElementsByClassName('center-content');
let titleTags = document.getElementsByTagName('h1');
let mainClass = mainClasses[0];
let centerClass = centerClasses[0];
let titleClass = titleTags[0];

// Req. 1
function showGoalText(text) {
  return textTags[0].innerHTML = text;
}

let goalText = 'Meus objetivos estão traçados da seguinte forma: Conseguir o primeiro estágio em 1 mês. Me efetivar em 6 meses e atuar como back-end sênior em 2 anos.'
showGoalText(goalText);

// Req 2 e 3
function changeBackgroundColor(element, color) {
  return element.style.backgroundColor = color;
}

let mainBackgroundColor = 'rgb(76,164,109)';
let centerBackgroundColor = 'white';

changeBackgroundColor(mainClass, mainBackgroundColor);
changeBackgroundColor(centerClass, centerBackgroundColor);

// Req 4
function correctTitle(element, text) {
  return element.innerHTML = text;
}

let titleText = 'Exercício 5.1 - JavaScripit'
correctTitle(titleClass, titleText);

// Req 5
function toUpperCase(elements) {
  for (let element of elements) {
    let upperCaseElement = element.textContent.toUpperCase();

    element.innerText = upperCaseElement;
  }
}

toUpperCase(textTags);

// Req 6
function showOnConsole(elements) {
  for (let element of elements) {
    console.log(element.textContent);
  }
}

showOnConsole(textTags);