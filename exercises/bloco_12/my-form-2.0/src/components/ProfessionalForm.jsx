import React, { Component } from 'react';

class ProfessionalForm extends Component {
  render() {
    const { messageHandle } = this.props;

    return (
      <fieldset>
        <legend>Dados Profissionais</legend>

        <div className="container">
          <label className="label" htmlFor="abstract">Resumo do currículo:</label>
          <textarea
            id="abstract"
            name="abstract"
            maxLength="1000"
            required
          ></textarea>

          <label className="label" htmlFor="position">Cargo:</label>
          <textarea
            id="position"
            name="position"
            maxLength="40"
            required
            onMouseEnter={messageHandle}
          ></textarea>
        </div>
      </fieldset>
    );
  }
}

export default ProfessionalForm;
