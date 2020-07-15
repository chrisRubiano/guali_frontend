import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext'

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const { isAuth } = useContext(AuthContext);

    if (!isAuth) return <Redirect to="/login" />

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(async() => {
        const USERS_URI = `${process.env.REACT_APP_BASE_URL}/users`;
        const getUsers = async() => {
            try {
              return await axios.get(USERS_URI, {
                  headers: { Authorization: `Bearer ${localStorage.getItem('maui_token')}` }
              });
            } catch (error) {
                alert('Error getting users');
            }
        };
        const resUsers = await getUsers();
        setUsers(resUsers.data);
    }, []);

  return ( 
    <Fragment>
      <h2>Lista de Usuarios</h2>
      <ul>
  { users.map((user) => <li>{user.email}</li>) }
      </ul>
    </Fragment>
  );
}
 
export default UsersList;
