import React, { Component } from 'react';
import ValidEmail from './ValidEmail';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      savedEmail: '',
    };
  }

  changeEmail(value) {
    this.setState({
      email: value,
    });
  }

  changeSavedEmail(value) {
    this.setState({
      savedEmail: value,
      email: '',
    });
  }

  render() {
    const { email, savedEmail } = this.state;

    return (
      <div className="app">
        <p>App component</p>
        
        <label htmlFor="id-email">
          Email
        </label>

        <input
          id="id-email"
          type="email"
          value={ email }
          onChange={ ({target}) => this.changeEmail(target.value)}
        />

        <input
          data-testid="send-button"
          type="button"
          value="Enviar"
          onClick={ () => this.changeSavedEmail(email) }
        />

        <button data-testid="back-button" type="button">Voltar</button>
        <button data-testid="clear-button" type="button">Apagar</button>

        <ValidEmail email={savedEmail} />
      </div>
    );
  }
}

export default App;
