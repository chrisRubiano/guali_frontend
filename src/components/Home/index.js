import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import user from '../../img/usuario.png'
import pass from '../../img/password.png'
import logo from '../../img/logo.png';
import './index.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();
    const jsonSend = { email, password };
    const LOGIN_URI = `${process.env.REACT_APP_BASE_URL}/login`;
    try {
      const res = await axios.post(LOGIN_URI, jsonSend);
      loginUser(res.data.token);
      alert('Successful login!');
    } catch (error) {
      alert('Error on login');
    }
  };
  return (
    <React.Fragment>
      <div className="centrarDiv fondoColor">
      <Form onSubmit={handleForm}>
        <div className="tarjetagrande" style={{ maxWidth: 18 + 'rem' }}>
          <FormGroup>
          <div className="card-header centrartexto">Iniciar Sesión</div>
            <Label className="margenA" >
            <img src={user} alt="icon user" className="icono margenI margenD" />
            Correo Electronico
            </Label>
            <Input
              className="form-control margenI margenD"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Ingresa tu correo electrónico" />
          </FormGroup>
          <FormGroup>
            <Label>
            <img src={pass} alt="icon password" className="icono margenI margenD" /> 
            Contraseña
            </Label>
            <Input
              className="form-control margenI margenD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Ingresa tu contraseña" />
          </FormGroup>
          <Button className="btn btn-primary boton">Ingresar</Button>
        </div>
      </Form>
    <img src={logo} alt="logo guali" className="logo" />
    </div>
    </React.Fragment >
  );
}

export default Home;