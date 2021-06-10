import React, { Component } from 'react';

class PersonalData extends Component {
  constructor() {
    super();

    this.state = {
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
      users: results,
    })
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        { users.map((user) => (
          <div key={ user.login.uuid }>
            <p>{ user.name.first }</p>
          </div>
        )) }
      </div>
    );
  }
}

export default PersonalData;
