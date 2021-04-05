let textTags = document.getElementsByTagName('p');
let mainClasses = document.getElementsByClassName('main-content');
let mainClass = mainClasses[0];
let centerClasses = document.getElementsByClassName('center-content');
let centerClass = centerClasses[0];

// Req. 1
function showGoalText(text) {
  return textTags[0].innerHTML = text;
}

let goalText = 'Meus objetivos estão traçados da seguinte forma: Conseguir o primeiro estágio em 1 mês. Me efetivar em 6 meses e atuar como back-end sênior em 2 anos.'
showGoalText(goalText);

// Req 2 e 3
function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

let mainBackgroundColor = 'rgb(76,164,109)';
let centerBackgroundColor = 'white';

changeBackgroundColor(mainClass, mainBackgroundColor);
changeBackgroundColor(centerClass, centerBackgroundColor);

// Req 4
