import React from 'react';
import { Route } from 'react-router-dom';

// Views
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import UsersList from './components/UsersList';

export default
  <React.Fragment>
    <Route
      exact path="/"
      component={ Home } />
    <Route
      exact path="/login"
      component={ Login } />
    <Route
      exact path="/logout"
      component={ Logout } />
    <Route
      exact path="/signup"
      component={ Signup } />
    <Route
      exact path="/UsersList"
      component={ UsersList } />
  </React.Fragment>
;