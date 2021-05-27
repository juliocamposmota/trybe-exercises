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

  fancyHandle = () => {
    this.setState((estadoAnterior, _props) => ({
      fancyCliks: estadoAnterior.fancyCliks + 1
    }))
  };

  regularHandle = () => {
    this.setState((estadoAnterior, _props) => ({
      regularCliks: estadoAnterior.regularCliks + 1
    }))
  };

  crazyHandle = () => {
    this.setState((estadoAnterior, _props) => ({
      crazyCLiks: estadoAnterior.crazyCLiks + 1
    }))
    // console.log('teste')
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
