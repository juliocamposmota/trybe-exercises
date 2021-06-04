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

    this.changeHandle = this.changeHandle.bind(this);
  }

  changeHandle({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }

  render() {

    return (
      <div className="App">
        <h1>My React Form</h1>

        <form className="form">
          <label>
            Choose your first Pokemon: 

            <select name="pokemonState" onChange={this.changeHandle}>
              <option value="charmander">Charmander</option>
              <option value="bulbassaur">Bulbassaur</option>
              <option value="squirtle">Squirtle</option>
            </select>
          </label>

          <label>
            Adventure name:

            <input type="text" name="nameState" onChange={this.changeHandle} />
          </label>

          <label>
            Age:
            <input type="number" name="ageState" onChange={this.changeHandle} />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
