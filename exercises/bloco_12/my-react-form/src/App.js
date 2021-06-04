import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonState: 'Charmander',
      nameState: '',
      ageState: 0,
    }

    this.pokemonHandle = this.pokemonHandle.bind(this);
    this.nameHandle = this.nameHandle.bind(this);
    this.ageHandle = this.ageHandle.bind(this);
  }

  pokemonHandle(event) {
    this.setState({
      pokemonState: event.target.value,
    })
  }

  nameHandle(event) {
    this.setState({
      nameState: event.target.value,
    })
  }

  ageHandle(event) {
    this.setState({
      ageState: event.target.value,
    })
  }

  render() {

    return (
      <div className="App">
        <h1>My React Form</h1>

        <form className="form">
          <label>
            Choose your first Pokemon: 

            <select onChange={this.pokemonHandle}>
              <option value="charmander">Charmander</option>
              <option value="bulbassaur">Bulbassaur</option>
              <option value="squirtle">Squirtle</option>
            </select>
          </label>

          <label>
            Adventure name:

            <input type="text" name="nome" onChange={this.nameHandle} />
          </label>

          <label>
            Age:
            <input type="number" name="idade" onChange={this.ageHandle} />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
