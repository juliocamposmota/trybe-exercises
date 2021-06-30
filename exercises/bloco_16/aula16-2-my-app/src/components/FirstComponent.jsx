import React, { Component } from 'react';
import { connect } from 'react-redux';

class FirstComponent extends Component {
  render() {
    const { myFirstState } = this.props;
    return (
      <div>
        {myFirstState.map((element, index) => (
          <p key={ index }>{ element }</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  myFirstState: state.myReducer.state,
});

export default connect(mapStateToProps, null)(FirstComponent);
