const wakingUp = () => console.log('Acordando!');
const getBreakfast = () => console.log('Bora tomar café!');
const goodNight = () => console.log('Partiu dormir!');

const doingThings = (action) => action();

doingThings(wakingUp);
doingThings(getBreakfast);
doingThings(goodNight);