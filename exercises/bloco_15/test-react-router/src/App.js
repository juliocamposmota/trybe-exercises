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
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>

        <Switch>
          <Route
            exact
            path="/about"
            component={ About }
          />
          <Route
            exact
            path="/"
            component={ Home }
          />
          <Route
            component={ NoMatch }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
