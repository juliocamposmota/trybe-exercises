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
let fridayButton = createButton('Sextou', 'btn-friday');
buttonsContainer.appendChild(holidayButton);
buttonsContainer.appendChild(fridayButton);
let holidayButtonStatus = false;
let fridayButtonStatus = false;

function changeBackgroundColorByClassName(className, bgColor, fontColor) {
  for (let day of daysList.children) {
    if (day.className.includes(className) === true) {
      day.style.backgroundColor = bgColor;
      day.style.color = fontColor;
    }
  }
}

holidayButton.addEventListener('click', function() {
  changeBackgroundColorByClassName('friday', 'rgb(238,238,238)', '#777');
  fridayButtonStatus = false;

  if (!holidayButtonStatus) {
    changeBackgroundColorByClassName('holiday', 'green', 'white');
    holidayButtonStatus = true;
  } else {
    changeBackgroundColorByClassName('holiday', 'rgb(238,238,238)', '#777');
    holidayButtonStatus = false;
  }
});

fridayButton.addEventListener('click', function() {
  changeBackgroundColorByClassName('holiday', 'rgb(238,238,238)', '#777');
  holidayButtonStatus = false;

  if (!fridayButtonStatus) {
    changeBackgroundColorByClassName('friday', 'blue', 'white');
    fridayButtonStatus = true;
  } else {
    changeBackgroundColorByClassName('friday', 'rgb(238,238,238)', '#777');
    fridayButtonStatus = false;
  }
});

for (let day of daysList.children) {
  day.addEventListener('mouseover', function() {
    day.style.fontSize = '40px';
    day.style.fontWeight = 'bold';
    day.style.transition = '1s';
  });
}

for (let day of daysList.children) {
  day.addEventListener('mouseout', function() {
    day.style.fontSize = '20px';
    day.style.fontWeight = 'normal';
    day.style.transition = '1s';
  });
}

const myTasks = document.querySelector('div.my-tasks');

function createTask(taskText) {
  let task = document.createElement('span');
  task.innerText = taskText;
  myTasks.appendChild(task);
}

function includeTaskLabel(labelColor) {
  let taskLabel = document.createElement('div');
  taskLabel.className = 'task';
  taskLabel.style.backgroundColor = labelColor;
  myTasks.appendChild(taskLabel);
}

createTask('Lavar a louça');
includeTaskLabel('red');

createTask('Fazer exercício da aula 5.3 da Trybe');
includeTaskLabel('green');

let tasks = document.querySelectorAll('div.task');

myTasks.addEventListener('click', function(event) {
  if (event.target.className.includes('task')) {
    let actualClass = event.target.className.includes('selected');
    
    for (let item of myTasks.children) {
      item.classList.remove('selected');
    }
  
    if(actualClass) {
      event.target.classList.remove('selected');
    } else {
      event.target.classList.add('selected');
    }
  }
});

let selectedClassStatus = false;

daysList.addEventListener('click', function(event) {
  if (event.target.className.includes('day')) {
    let selectedClass = document.querySelector('.selected');
    
    if (selectedClass !== null) {
      let selectedClassColor = selectedClass.style.backgroundColor;
      
      if (!selectedClassStatus) {
        event.target.style.backgroundColor = selectedClassColor;
        event.target.style.color = 'white';
        selectedClassStatus = true;
      } else {
        event.target.style.backgroundColor = 'rgb(238,238,238)';
        event.target.style.color = '#777';
        selectedClassStatus = false;
      }
    }
  }
});

let inputTaskContainer = document.querySelector('.input-container');
let newTaskInput = document.querySelector('#task-input');
let addTaskButton = document.querySelector('#btn-add');

addTaskButton.addEventListener('click', function() {
  if (newTaskInput.value !== '') {
    let task = document.createElement('p');

    task.innerHTML = newTaskInput.value;
    inputTaskContainer.appendChild(task);
  } else {
    alert('Informe uma tarefa.');
  }
});

newTaskInput.addEventListener('keypress', function(event) {
  let keyCode = event.keyCode;

  if (keyCode === 13) {
    if (newTaskInput.value !== '') {
      let task = document.createElement('p');
  
      task.innerHTML = newTaskInput.value;
      inputTaskContainer.appendChild(task);
      newTaskInput.value = '';
    } else {
      alert('Informe uma tarefa.');
    }
  }
});