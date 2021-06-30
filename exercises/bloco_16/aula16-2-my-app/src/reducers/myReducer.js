const INITIAL_STATE = {
  state: ['teste 1', 'teste 2'],
};

const myReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'NEW_ACTION':
      return { state: action.state };
    default:
      return state;
  }
};

export default myReducer;
