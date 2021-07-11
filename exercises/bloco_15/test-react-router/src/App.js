import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

export const About = () => <h1>Página Sobre</h1>
export const Home = () => <h1>Página Home</h1>
export const NoMatch = () => <h1>Página não encontrada</h1>

class App extends Component {
  render() {
    return (
      <div>
        App Component
      </div>
    );
  }
}

export default App;
