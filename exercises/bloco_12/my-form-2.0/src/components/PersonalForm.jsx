import React, { Component } from 'react';
import states from '../data';
import './PersonalForm.css';

class PersonalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>

        <div className="container">
          <label>
            Nome:

            <input
              type="text"
              name="name"
              required
            />
          </label>

          <label>
            Email:

            <input
              type="text"
              name="email"
              required
            />
          </label>

          <label>
            CPF:

            <input
              type="text"
              name="cpf"
              required
            />
          </label>
        </div>

        <div className="container">
          <label>
            Endereço:

            <input 
              type="text"
              name="adress"
              required
            />
          </label>

          <label>
            Cidade:

            <input 
              type="text" 
              name="city" 
              required 
            />
          </label>

          <label>
            Estado:

            <select>
              <option value='select-state'>Selecione um estado</option>
              {states.map(({ value, label }) => (
                <option value={label} key={value} >{ label }</option>
              ))}
            </select>
          </label>
        </div>

        <label htmlFor="house">
          <input
            type="radio"
            name="adressType"
            id="house"
          />
          Casa
        </label>
        <label htmlFor="apartment">
          <input
            type="radio"
            name="adressType"
            id="apartment"
          />
          Apartamento
        </label>
      </fieldset>
    );
  }
}

export default PersonalForm;
