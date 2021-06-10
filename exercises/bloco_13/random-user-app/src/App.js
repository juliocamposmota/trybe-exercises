import React, { Component } from 'react';
import PersonalData from './components/PersonalData';
import Loading from './components/Loading';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      users: [],
    }

    this.fetchUsers = this.fetchUsers.bind(this);
  }

  async fetchUsers() {
    const requestHeaders = { headers: { Accept: 'aplication/json' } }
    const requestReturn = await fetch('https://api.randomuser.me/', requestHeaders);
    const requestObject = await requestReturn.json();
    const results = await requestObject.results;

    this.setState({
      loading: false,
      users: results,
    })
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { loading, users } = this.state;

    return (
      <div>
        { loading ? <Loading /> : <PersonalData users={ users }/> }
      </div>
    );
  }
}

export default App;
