import React from 'react';
import { Router } from '@reach/router';

import App from './App';
import Callback from './Callback';

export default () => {
  return (
    <Router>
      <App path="/" />
      <Callback path="/callback" />
    </Router>
  );
};
