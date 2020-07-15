import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Redirect } from 'react-router-dom';

const Logout = () => {
  const { logoutUser } = useContext(AuthContext);
  logoutUser();
  alert('Successful logout');
  return (
    <Redirect to="/login" />
  )
}

export default Logout;