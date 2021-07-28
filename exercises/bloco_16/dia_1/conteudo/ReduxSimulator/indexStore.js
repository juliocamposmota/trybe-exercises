import { createStore } from 'redux';
import reducerCombinado from './indexReducer';

const store = createStore(reducerCombinado);

store.subscribe(() => {
  console.log(store.getState());
});

// Output
/*
{
 meuReducer: {/_estado do meuReducer_/},
 meuOutroReducer: {/_estado do meuOutroReducer_/,}
}
*/

export default store;
