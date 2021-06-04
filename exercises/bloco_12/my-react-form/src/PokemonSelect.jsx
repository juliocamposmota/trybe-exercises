import React, { Component } from 'react';

class PokemonSelect extends Component {
  render() {
    const { value, changeHandle } = this.props;

    return (
      <div>
          <label>
            Choose your first Pokemon: 

            <select 
              name="pokemonState"
              value={value}
              onChange={changeHandle}
            >
              <option value="charmander">Charmander</option>
              <option value="bulbassaur">Bulbassaur</option>
              <option value="squirtle">Squirtle</option>
            </select>
          </label>
      </div>
    );
  }
}

export default PokemonSelect;
