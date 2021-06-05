import React, { Component } from 'react';
import PersonalForm from './PersonalForm';

class MyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.changeHandle = this.changeHandle.bind(this);
  }

  changeHandle({ target }) {
    console.log(target.value);
  }

  render() {
    return (
      <div>
        <form id="my-form">
          <PersonalForm changeHandle={this.changeHandle} />
        </form>

        <button type="submit" form="my-form" >Criar CV</button>
      </div>
    );
  }
}

export default MyForm;
