import React, { Component } from 'react';
import PokemonSelect from './PokemonSelect';
import NotifyCheckbox from './NotifyCheckbox';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonState: 'charmander',
      nameState: '',
      ageState: 0,
      notifyState: undefined,
      fileState: '',
    }

    this.changeHandle = this.changeHandle.bind(this);
    this.fileInput = React.createRef();
  }

  changeHandle({ target }) {
    const { name } = target;
    let value;
    if (target.type === 'checkbox') {
      value = target.checked;
    } else if (target.type === 'file') {
      value = this.fileInput;
    } else {
      value = target.value;
    }

    this.setState({
      [name]: value,
    })
  }

  render() {

    return (
      <div className="App">
        <h1>My React Form</h1>

        <form className="form">
          <PokemonSelect 
            value={this.state.pokemonState} 
            changeHandle={this.changeHandle} 
          />

        <fieldset className="character-info">
          <legend>Character info</legend>

          <label>
            Adventure name:

            <input 
              type="text" 
              name="nameState" 
              onChange={this.changeHandle} 
            />
          </label>

          <label>
            Age:
            <input 
              type="number" 
              name="ageState" 
              onChange={this.changeHandle} 
            />
          </label>
        </fieldset>

          <NotifyCheckbox 
            value={this.state.notifyState} 
            changeHandle={this.changeHandle} 
          />

          <label>
            Choose your better picture, adventure!

            <input 
              type="file" 
              name="fileState" 
              ref={this.fileInput} 
              onChange={this.changeHandle} 
            />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
