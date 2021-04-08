function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

const daysList = document.querySelector('#days');
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holidaysList = [24, 25, 31];
const fridaysList = [4, 11, 18, 25];

function includeDays() {
  for (let day of dezDaysList) {
    let dayItem = document.createElement('li');
    dayItem.className = 'day';

    if (holidaysList.indexOf(day) !== -1 && fridaysList.indexOf(day) !== -1) {
      dayItem.classList.add('holiday');
      dayItem.classList.add('friday');
    } else if (holidaysList.indexOf(day) !== -1) {
      dayItem.classList.add('holiday');
    } else if (fridaysList.indexOf(day) !== -1) {
      dayItem.classList.add('friday');
    }

    dayItem.innerText = day;
    daysList.appendChild(dayItem);
  }
}

includeDays();

let buttonsContainer = document.querySelector('.buttons-container');

function createButton(buttonName, id) {
  let button = document.createElement('button');
  button.innerText = buttonName;
  button.id = id;

  return button;
}

let holidayButton = createButton('Feriados', 'btn-holiday');
buttonsContainer.appendChild(holidayButton);
let buttonStatus = false;

holidayButton.addEventListener('click', function() {
  if (!buttonStatus) {
    for (let day of daysList.children) {
      if (day.className.includes('holiday') === true) {
        day.style.backgroundColor = 'green';
        day.style.color = 'white';
      }
    }

    buttonStatus = true;
  } else {
    for (let day of daysList.children) {
      if (day.className.includes('holiday') === true) {
        day.style.backgroundColor = 'rgb(238,238,238)';
        day.style.color = '#777';
      }
    }

    buttonStatus = false;
  }
});