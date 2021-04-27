const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = student => {
  const skills = Object.keys(student);
  for (let index in skills) {
    console.log(`${skills[index]}, Nível: ${student[skills[index]]}`);
  }
}

listSkills(student1);
listSkills(student2);