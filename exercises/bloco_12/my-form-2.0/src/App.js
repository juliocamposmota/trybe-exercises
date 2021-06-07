import React, { Component } from 'react';
import MyForm from './components/MyForm';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>Seu currículo</h1>
        <MyForm />
      </div>
    );
  }
}

export default App;
