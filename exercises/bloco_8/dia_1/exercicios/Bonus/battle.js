const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 14,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const generateRandom = (floorRange, topRange) => {
  let randomNumber = 0;
  while (randomNumber < floorRange) {
    randomNumber = Math.floor((Math.random() * topRange) + 1);
  }
  return randomNumber;
}

const useMana = () => {
  if (mage.mana < 15) {
    return 'Não possui mana suficiente';
  } else {
    return mage.mana;
  }
}

const dragonStrike = () => {
  return damage = generateRandom(15, dragon.strength);
}

const warriorStrike = () => {
  return damage = generateRandom(warrior.strength, warrior.strength + warrior.weaponDmg);
}

const mageStrike = () => {
  if (useMana() != mage.mana) {
    return useMana();
  } else {
    return strikeInfo = {
      damage: generateRandom(mage.intelligence, mage.intelligence * 2),
      usedMana: useMana(),
    };
  }
}

console.log(`--Dragon Strike-- It takes ${dragonStrike()} hit points.`);
console.log(`--Warrior Strike-- It takes ${warriorStrike()} hit points.`);
console.log(mageStrike());