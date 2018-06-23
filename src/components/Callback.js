import React, { Component } from 'react';
import { handleAuthentication } from '../services/auth';

// Auth0 sends the user to this route. We'll if they come back with a jwt token.
// we'll authorize and send them to the home route, Otherwise we'll log  the error and do the same.
// This callback component seems trivial, because we're not reading from or writing to a db yet.
// You might load user data from mongodb or firebase in the handleAuthentication function and for those
// cases we'll want to have this loading page because that takes time.
export default class Callback extends Component {
  authorizeIfAuthenticated = href => {
    if (/id_token|error/.test(href)) {
      // redirects to / when complete
      handleAuthentication();
    }
  };

  render() {
    // Reach router passes in location.href by default lets check it for the token
    // Redirect to '/' if it's there.
    this.authorizeIfAuthenticated(this.props.location.href);
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}
