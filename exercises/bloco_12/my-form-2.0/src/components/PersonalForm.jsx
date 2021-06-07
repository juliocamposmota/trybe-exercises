import React, { Component } from 'react';
import states from '../data';

class PersonalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      upperCaseHandle,
      specialCharHandle,
      checkNumbersHandle,
    } = this.props;

    return (
      <fieldset>
        <legend>Dados Pessoais</legend>

        <div className="container">
          <label className="label" htmlFor="name">Nome:</label>
          <input
            id="name"
            type="text"
            name="name"
            maxLength="40"
            required
            onChange={upperCaseHandle}
          />

          <label className="label" htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            name="email"
            maxLength="50"
            required
          />

          <label className="label" htmlFor="cpf">CPF:</label>
          <input
            id="cpf"
            type="text"
            name="cpf"
            maxLength="11"
            required
          />
        </div>

        <div className="container">
          <label className="label" htmlFor="adress">Endereço:</label>
          <input
            id="adress"
            type="text"
            name="adress"
            maxLength="200"
            required
            onChange={specialCharHandle}
          />

          <label className="label" htmlFor="city">Cidade:</label>
          <input 
            id="city"
            type="text" 
            name="city"
            maxLength="28"
            required
            onBlur={checkNumbersHandle}
          />

          <label className="label" htmlFor="state">Estado:</label>
          <select id="state">
            <option value='select-state'>Selecione um estado</option>
            {states.map(({ value, label }) => (
              <option value={label} key={value} >{ label }</option>
            ))}
          </select>
        </div>

        <div className="container">
          <label className="label">Tipo de Moradia</label>

          <div className="radio-container">
            <label htmlFor="house">
              <input
                type="radio"
                name="adressType"
                id="house"
                value="house"
                required
              />
              Casa
            </label>

            <label htmlFor="apartment">
              <input
                type="radio"
                name="adressType"
                id="apartment"
                value="apartment"
                required
              />
              Apartamento
            </label>
          </div>
        </div>
      </fieldset>
    );
  }
}

export default PersonalForm;
