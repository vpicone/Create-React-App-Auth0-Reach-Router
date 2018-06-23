import React, { Component } from 'react';
import { isAuthenticated } from '../services/auth';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';

export default class App extends Component {
  render() {
    return isAuthenticated() ? <Home /> : <LandingPage />;
  }
}
