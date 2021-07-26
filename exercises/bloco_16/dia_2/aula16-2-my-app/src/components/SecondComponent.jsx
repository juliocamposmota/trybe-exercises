import React, { Component } from 'react';
import { connect } from 'react-redux';
import newAction from '../actions/newAction';

class SecondComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    }
  }

  render() {
    const { myFirstDispatch } = this.props;
    const { inputValue } = this.state;

    return (
      <div>
        <input
          type="text"
          onChange={ ({ target }) => this.setState({ inputValue: target.value })}
        />

        <button
          type="button"
          onClick={ () => myFirstDispatch(inputValue) }
        >
          Executar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  myFirstDispatch: (state) => dispatch(newAction(state))
});

export default connect(null, mapDispatchToProps)(SecondComponent);
