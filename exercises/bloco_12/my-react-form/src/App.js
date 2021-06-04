import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>My React Form</h1>

        <form className="form">
          <label>
            Choose your first Pokemon: 

            <select>
              <option value="charmander">Charmander</option>
              <option value="bulbassaur">Bulbassaur</option>
              <option value="squirtle">Squirtle</option>
            </select>
          </label>

          <label>
            Adventure name:

            <input type="text" name="nome" />
          </label>

          <label>
            Age:
            <input type="number" name="idade" />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
