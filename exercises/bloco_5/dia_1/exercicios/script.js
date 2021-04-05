let textTags = document.getElementsByTagName('p');
let mainContentClasses = document.getElementsByClassName('main-content');

function showGoalText(text) {
  return textTags[0].innerHTML = text;
}

let goalText = 'Meus objetivos estão traçados da seguinte forma: Conseguir o primeiro estágio em 1 mês. Me efetivar em 6 meses e atuar como back-end sênior em 2 anos.'
showGoalText(goalText);

