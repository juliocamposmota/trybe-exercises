import React, { Component } from 'react';

class NotifyCheckbox extends Component {
  render() {
    const { value, changeHandle } = this.props;

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
