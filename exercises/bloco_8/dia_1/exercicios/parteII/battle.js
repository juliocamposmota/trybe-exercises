const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 124,
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
    return 15;
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

const gameActions = {
  warriorTurn: (warriorStrike) => {
    const warriorDamage = warriorStrike();
    dragon.healthPoints -= warriorDamage;
    warrior.damage = warriorDamage;
  },
  mageTurn: (mageStrike) => {
    const mageDamage = mageStrike();
    dragon.healthPoints -= mageDamage;
    mage.mana -= 15;
    mage.damage = mageDamage;
  },
  dragonTurn: (dragonStrike) => {
    const dragonDamage = dragonStrike();
    warrior.healthPoints -= dragonDamage;
    mage.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorStrike);
gameActions.mageTurn(mageStrike);
gameActions.dragonTurn(dragonStrike);
console.log(gameActions.turnResults());
