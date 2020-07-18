import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';
import {
  Form,
  FormGroup
} from 'reactstrap';
import './index.css';

const MovementList = () => {
  const [users, setUsers] = useState([]);
  const [movement, setMovement] = useState([]);
  const idUser = '5f0f9d12fd79551ca42d8a25';
  const { isAuth } = useContext(AuthContext);
  const history = useHistory();

  if (!isAuth) return <Redirect to="/" />

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(async () => {
    const MOVEMENT_URI = `${process.env.REACT_APP_BASE_URL}/users/${idUser}/movement`;
    const getMovement = async () => {
      try {
        return await axios.get(MOVEMENT_URI, {
          headers: { Authorization: `Bearer ${localStorage.getItem('maui_token')}` }
        });
      } catch (error) {
        alert('Error getting users');
      }
    };
    const resMovement = await getMovement();
    setMovement(resMovement.data);
  }, []);
  return (
    <React.Fragment>
      <div className="bColor">
        <Form className="sitioN">
          <FormGroup className="sitioN" >
            <div className="tipografia sizeText">
              Balance Actual:
            </div>
            <div className="tipografia sizeText" style={{ color: "#06D6A0" }}>
              +$12620.00
            </div>
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
            {movement.map((movement) =>
              <div className="sitio">
                <div className="tipografia alinearC">
                  {movement.isExpense
                    ? <div className="gasto">${movement.amount}</div>
                    : <div className="ingreso">${movement.amount}</div>
                  }
                </div>
                <div className="tipografia alinearC">
                  {movement.title}
                </div>
                <div className="tipografia fCategoria alinearC">
                  {movement.category}
                </div>
                <div className="tipografia alinearC">
                  {movement.date}
                </div>
              </div>
            )}
          </FormGroup>
        </Form>
      </div>
    </React.Fragment >
  );
}


export default MovementList;
