import React from 'react';
import { Route } from 'react-router-dom';

// Views
import Home from './components/Home';
import Logout from './components/Logout';
import Signup from './components/Signup';
import MovementList from './components/MovementList';
import AddSpending from './components/AddSpending';
import AddIncome from './components/AddIncome';

export default
  <React.Fragment>
    <Route
      exact path="/"
      component={Home} />
    <Route
      exact path="/logout"
      component={Logout} />
    <Route
      exact path="/signup"
      component={Signup} />
    <Route
      exact path="/balance"
      component={MovementList} />
    <Route
      exact path="/gasto"
      component={AddSpending} />
    <Route
      exact path="/ingreso"
      component={AddIncome} />
  </React.Fragment>
  ;