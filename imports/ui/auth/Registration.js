import React, { Component } from 'react';

class Registration extends Component {
  render() {
    return (
      <div>
        <input type='text' placeholder='user name' />
        <br />
        <br />
        <input type='text' placeholder='password' />
        <br />
        <br />
        <input type='text' placeholder='confirm password' /> 
        <br />
        <br />
        <input type='submit' valut='submit' />
      </div>
    );
  }
}

export default Registration;