import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      joke: '',
      nome: '',
      email: '',
    };
  }

  handleInput({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    const headers = { headers: { Accept: 'application/json' } };

    fetch(API_URL, headers)
      .then((response) => response.json())
      .then((data) => this.setState({ joke: data.joke }));
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Teste de Inputs</h1>

          <label>
            Nome: 
            <input
              data-testid="input-nome"
              onChange={ (e) => this.handleInput(e) }
              name="nome"
              value={ this.state.nome }
            />
          </label>

          <label>
            Email:
            <input
              data-testid="input-email"
              onChange={ (e) => this.handleInput(e) }
              name="email"
              value={ this.state.email }
            />
          </label>
        </div>

        <div>
          <p>Before you go, listen to this dad joke:</p>
          <span>{this.state.joke}</span>
        </div>
      </div>
    );
  }
}

export default App;
