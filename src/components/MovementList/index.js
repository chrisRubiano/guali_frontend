import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import './index.css'

const MovementList = () => {
  const [users, setUsers] = useState([]);
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) return <Redirect to="/" />

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(async () => {
    const USERS_URI = `${process.env.REACT_APP_BASE_URL}/users`;
    const getUsers = async () => {
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
    <React.Fragment>
      <div className="bColor">
        <Form className="sitio">
          <FormGroup className="sitio" >
            <div className="tipografia sizeText">
              Balance Actual:
            </div>
            <div className="tipografia sizeText" style={{ color: "#06D6A0" }}>
              +12620.00
            </div>
          </FormGroup>
          <FormGroup className="moverB">
            <Button style={{ backgroundColor: "#06D6A0", color: "white" }} >Agregar Gasto</Button>
          </FormGroup>
        </Form>
        <Form className="centrar">
          <FormGroup>
            <div className="tipografia">
              <h3>Tus últimos movimientos: </h3>
            </div>
          </FormGroup>
        </Form>
        <Form>
          <FormGroup className="margenLista">
            <ul style={{ borderBlockEndColor: "black" }}>
              {users.map((user) => <li>{user.email}</li>)}
            </ul>
          </FormGroup>
        </Form>
      </div>
    </React.Fragment >
  );
}


export default MovementList;
