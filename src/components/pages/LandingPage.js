import React, { Component } from 'react';
import { login } from '../../services/auth';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <h2>You need to log in.</h2>
        <button onClick={() => login()}>Log in</button>
      </div>
    );
  }
}
