import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Redirect, useHistory } from 'react-router-dom';

const Logout = () => {
  const { logoutUser } = useContext(AuthContext);
  const history = useHistory();

  logoutUser();
  alert('Successful logout');
  history.push('./');
  window.location.reload(true);
  return (
    <Redirect to="/"/>    
  )
}
export default Logout;