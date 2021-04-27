const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsWithValues = (student) => Object.values(student);
const listSkillsWithKeys = (student) => Object.keys(student);
const report = (student) => {
  const skills = Object.keys(student);
  for (let index in skills) {
    console.log(`${skills[index]}, Nível: ${student[skills[index]]}`);
  }
}

// Sem Object.values
console.log(listSkillsWithFor(student));

// Com Object.values
console.log(listSkillsWithValues(student));
console.log(listSkillsWithKeys(student));
report(student);