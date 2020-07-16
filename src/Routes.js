import React from 'react';
import { Route } from 'react-router-dom';

// Views
import Home from './components/Home';
import Logout from './components/Logout';
import Signup from './components/Signup';
import UsersList from './components/UsersList';

export default
  <React.Fragment>
    <Route
      exact path="/"
      component={ Home } />
    <Route
      exact path="/logout"
      component={ Logout } />
    <Route
      exact path="/signup"
      component={ Signup } />
    <Route
      exact path="/Historial"
      component={ UsersList } />
  </React.Fragment>
;