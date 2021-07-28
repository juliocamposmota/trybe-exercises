// REDUX
// Estudando as partes do Redux

// Estado inicial
// - O estado deve ter um ponto de partida,
const ESTADO_INICIAL = {
  login: false,
  email: "",
};

// Reducer
// - Responsáveis por manipular a store,
// - As regras de manipulação são definidas pelas actions,
// - Evitam a manipulação direta da store e facilita a manutenção.
const reducer = (state = ESTADO_INICIAL) => {
  return state;
};

// Store
// - Onde o estado fica armazenado e protegido,
// - As mudanças são gerenciadas pelo Reducer,
// - As mudanças devem ser previamente definidas nas actions,
const store = Redux.createStore(reducer);

// Action
// - Objeto JS que contém pelo menos uma propriedade type
// - Responsável por comunicar-se com o Reducer, 
// - Comunica as mudanças que serão feitas na Store,
// - Pode-se chamar de INTENÇÕES de mudança de estado,
store.dispatch(fazerLogin('alguem@email.com'));

// Consultando o estado
console.log(store.getState());
// Output --> { login: false, email: "" }
