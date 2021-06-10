import React, { Component } from 'react';

class PersonalData extends Component {
  render() {
    const { users } = this.props;

    return (
      <div>
        { users.map((user) => (
          <div key={ user.login.uuid }>
            <img src={user.picture.large} alt="random user profile" />
            <p>{ user.name.first }</p>
            <p>{ user.email }</p>
            <p>{ user.dob.age }</p>
            <p>{ user.location.country }</p>
          </div>
        )) }
      </div>
    );
  }
}

export default PersonalData;
