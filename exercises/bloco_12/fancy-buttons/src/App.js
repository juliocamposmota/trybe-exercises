import React from 'react';
import './App.css'; 

class App extends React.Component {
  constructor(props) {
    super()

    this.state = {
      fancyCliks: 0,
      regularCliks: 0,
      crazyCLiks: 0,
    }

    this.fancyHandle = this.fancyHandle.bind(this);
    this.regularHandle = this.regularHandle.bind(this);
    this.crazyHandle = this.crazyHandle.bind(this);
  }

  fancyHandle = (event) => {
    this.setState((estadoAnterior, _props) => ({
      fancyCliks: estadoAnterior.fancyCliks + 1
    }))

    if ((this.state.fancyCliks + 1) % 2 === 0) {
      event.target.style.backgroundColor = 'green';
    } else {
      event.target.style.backgroundColor = 'red';
    }

    console.log(event.target.style.backgroundColor);
  };

  regularHandle = (event) => {
    this.setState((estadoAnterior, _props) => ({
      regularCliks: estadoAnterior.regularCliks + 1
    }))

    if ((this.state.regularCliks + 1) % 2 === 0) {
      event.target.style.backgroundColor = 'green';
    } else {
      event.target.style.backgroundColor = 'red';
    }

    console.log(event.target.style.backgroundColor);
  };

  crazyHandle = (event) => {
    this.setState((estadoAnterior, _props) => ({
      crazyCLiks: estadoAnterior.crazyCLiks + 1
    }))

    if ((this.state.crazyCLiks + 1) % 2 === 0) {
      event.target.style.backgroundColor = 'green';
    } else {
      event.target.style.backgroundColor = 'red';
    }

    console.log(event.target.style.backgroundColor);
  };

  render() {

    return (
      <div>
        <button onClick={this.fancyHandle}>{`My Fancy Button counts ${this.state.fancyCliks}`}</button>
        <button onClick={this.regularHandle}>{`My Regular Button counts ${this.state.regularCliks}`}</button>
        <button onClick={this.crazyHandle}>{`My Crazy Button counts ${this.state.crazyCLiks}`}</button>
      </div>
    );
  }
}

export default App;
