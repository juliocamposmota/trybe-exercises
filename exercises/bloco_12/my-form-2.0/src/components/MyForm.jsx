import React, { Component } from 'react';
import PersonalForm from './PersonalForm';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <form id="my-form">
          <PersonalForm />
        </form>

        <button type="submit" form="my-form" >Criar CV</button>
      </div>
    );
  }
}

export default MyForm;
