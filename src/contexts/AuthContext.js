import React, { createContext, useState, useEffect } from 'react';
import decode from 'jwt-decode';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  const loginUser = (token) => {
    localStorage.setItem('maui_token', token);
    const decoded = decode(token);
    setUser(decoded);
    setIsAuth(true);
  };

  const logoutUser = () => {
    localStorage.removeItem('maui_token');
    setUser({});
    setIsAuth(false);
  };

  useEffect(() => {
    const item = localStorage.getItem('maui_token');
    if (item) {
      const decoded = decode(item);
      setUser(decoded);
      setIsAuth(true);
    }
  }, []);


  return (
    <AuthContext.Provider value={{
      isAuth, user, loginUser, logoutUser
    }}>
      {props.children}
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;