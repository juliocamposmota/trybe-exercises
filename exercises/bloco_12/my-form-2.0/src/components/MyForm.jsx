import React, { Component } from 'react';
import PersonalForm from './PersonalForm';

class MyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.upperCaseHandle = this.upperCaseHandle.bind(this);
    this.specialCharHandle = this.specialCharHandle.bind(this);
  }

  upperCaseHandle({ target }) {
    target.value = target.value.toUpperCase();
  }

  specialCharHandle({ target }) {
    console.log(target.value);
  }

  render() {
    return (
      <div>
        <form id="my-form">
          <PersonalForm
            upperCaseHandle={this.upperCaseHandle}
            specialCharHandle={this.specialCharHandle}
          />
        </form>

        <button type="submit" form="my-form" >Criar CV</button>
      </div>
    );
  }
}

export default MyForm;
