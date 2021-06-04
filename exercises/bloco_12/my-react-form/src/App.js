import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonState: 'Charmander',
      nameState: '',
      ageState: 0,
      notifyState: false,
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

    console.log(this.fileInput);

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

          <fieldset>
            <legend>Personal info</legend>

            <label>
              Adventure name:

              <input type="text" name="nameState" onChange={this.changeHandle} />
            </label>

            <label>
              Age:
              <input type="number" name="ageState" onChange={this.changeHandle} />
            </label>
          </fieldset>

          <label>
            Get notified about products and promotions?

            <input type="checkbox" name="notifyState" onChange={this.changeHandle} />
          </label>

          <label>
            Choose your better picture, adventure!

            <input type="file" name="fileState" ref={this.fileInput} onChange={this.changeHandle} />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
