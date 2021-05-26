import React from 'react';
import Data from './data';
import Pokemon from './Pokemon';
import './pokedex.css'

class Pokedex extends React.Component {
  render() {
    return (
      <div className='pokemons-container'>
        {Data.map((pokemon, index) => (
          <Pokemon pokemons={pokemon} key={index}/>
        ))}
      </div>
    )
  }
}

export default Pokedex;
