import React from 'react';
import './App.css'; 

class App extends React.Component {
  constructor(props) {
    super()

    this.fancyHandle = this.fancyHandle.bind(this);
    this.regularHandle = this.regularHandle.bind(this);
    this.crazyHandle = this.crazyHandle.bind(this);
  }

  fancyHandle = () => console.log('This is my fancy button');
  regularHandle = () => console.log('This is my regular button');
  crazyHandle = () => console.log('This is my crazy button');

  render() {
    
    return (
      <div>
        <button onClick={this.fancyHandle}>My Fancy Button</button>
        <button onClick={this.regularHandle}>My Regular Button</button>
        <button onClick={this.crazyHandle}>My Crazy Button</button>
      </div>
    );
  }
}

export default App;
