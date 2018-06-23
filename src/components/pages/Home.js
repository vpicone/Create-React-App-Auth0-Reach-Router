import React, { Component } from 'react';
import { logout, getUserData } from '../../services/auth';
import Json from '../common/Json';

export default class Home extends Component {
  render() {
    const user = getUserData();
    return (
      <div>
        <h2>Hello {user.given_name}!</h2>
        <img alt="profile" src={user.picture} style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
        <Json>{user}</Json>
        <br />
        <button onClick={() => logout()}>Log out</button>
      </div>
    );
  }
}
