import React from 'react';
import Data from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        {Data.map((pokemon) => (
          <Pokemon pokemons={pokemon}/>
        ))}
      </div>
    )
  }
}

export default Pokedex;
