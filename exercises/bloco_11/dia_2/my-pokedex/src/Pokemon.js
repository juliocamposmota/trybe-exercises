import React from 'react';
import './pokemon.css'

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemons

    return (
      <div className='pokemon-card'>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average Weight: {averageWeight.value} <span>{averageWeight.measurementUnit}</span></p>
        </div>

        <div>
          <img src={image} alt={name}/>
        </div>
      </div>
    )
  }
}

export default Pokemon;