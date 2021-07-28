import React, { Component } from 'react';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstComponent />
        <SecondComponent />
      </div>
    );
  }
}

export default App;
