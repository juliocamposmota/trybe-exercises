// Object propertie shorthand
const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};
// Não é necessário repetir o nome que o valor recebe quando a chave tem o mesmo nome.
const usuaria = newUser(54, 'isabella', 'isabella@email.com');

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

const coordenadas = getPosition(-19.8157, -43.9542);

const infos = {...usuaria, ...coordenadas};
console.log(infos);


