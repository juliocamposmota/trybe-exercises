const objectGeneratorByName = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName: fullName, email: `${email}@trybe.com.br`};
}

const newEmployees = () => {
  const employees = {
    id1: objectGeneratorByName('Júlio Mota Campos'),
    id2: objectGeneratorByName('Jailton Roberto Jr'),
    id3: objectGeneratorByName('Vittor Melo')
  }
  return employees;
};

console.log(newEmployees());