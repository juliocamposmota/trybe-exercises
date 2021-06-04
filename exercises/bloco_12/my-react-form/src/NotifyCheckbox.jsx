import React, { Component } from 'react';

class NotifyCheckbox extends Component {
  render() {
    const { value, changeHandle } = this.props;

    let error;
    if (value === undefined) error = 'Notify checkbox must not be undefined';

    return (
      <label>
        Get notified about products and promotions?

        <input 
          type="checkbox" 
          name="notifyState" 
          value={value}
          onChange={changeHandle} 
        />
    </label>
    );
  }
}

export default NotifyCheckbox;
