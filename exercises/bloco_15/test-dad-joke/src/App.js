import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      joke: '',
    };
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
          <p>Before you go, listen to this dad joke:</p>
          <span>{this.state.joke}</span>
        </div>
      </div>
    );
  }
}

export default App;
