let header = document.querySelector('header');
let sections = document.querySelectorAll('section');
let emergencyTitles = document.querySelectorAll('.emergency-tasks h3');
let noEmergencyTitles = document.querySelectorAll('.no-emergency-tasks h3');

header.style.backgroundColor = '#3CB06A';

sections[0].style.backgroundColor = '#FD9F83';
sections[1].style.backgroundColor = '#F9DB5E';

for (let title of emergencyTitles) {
  title.style.backgroundColor = '#AB7DF3';
}

for (let title of noEmergencyTitles) {
  title.style.backgroundColor = '#232525';
}