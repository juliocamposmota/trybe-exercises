import React, { Component } from 'react';
import PersonalForm from './PersonalForm';

class MyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.upperCaseHandle = this.upperCaseHandle.bind(this);
    this.specialCharHandle = this.specialCharHandle.bind(this);
    this.checkNumbersHandle = this.checkNumbersHandle.bind(this);
  }

  upperCaseHandle({ target }) {
    target.value = target.value.toUpperCase();
  }

  specialCharHandle({ target }) {
    target.value
      .normalize('NFD')
      .replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
  }

  checkNumbersHandle({ target }) {
    if (/[0-9]/.test(target.value)) {
      target.value = '';
    }
  }

  render() {
    return (
      <div>
        <form id="my-form">
          <PersonalForm
            upperCaseHandle={this.upperCaseHandle}
            specialCharHandle={this.specialCharHandle}
            checkNumbersHandle={this.checkNumbersHandle}
          />
        </form>

        <button type="submit" form="my-form" >Criar CV</button>
      </div>
    );
  }
}

export default MyForm;
