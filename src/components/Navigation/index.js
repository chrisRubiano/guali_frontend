import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './index.css';
import logo from '../../img/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth, user } = useContext(AuthContext);

  const toggle = () => setIsOpen(!isOpen);

  const publicNavbar = () => {
    return (
      <Navbar
        className="navbar navbar-dark navColor"
        expand="md">
        <img src={logo} alt="logo Guali" className="navbar-img"/>
        <NavbarBrand tag={Link} to="/">Guali</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/signup">Regístrate</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>)
  }

  const authNavbar = () => {
    return (
      <Navbar
        className="navbar navbar-dark bg-dark"
        expand="md">
        <img src={logo} alt="logo Guali" className="navbar-img"/>
        <NavbarBrand tag={Link} to="/">¡Bienvenid@ {user.first_name} :D </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/Historial">Historial</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="#">Reportes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="#">Agregar un Ingreso</NavLink>
            </NavItem>
            <NavItem className="derecha">
              <NavLink tag={Link} to="/logout">Cerrar Sesión</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>)
  }

  return (
    <React.Fragment>
      {isAuth ? authNavbar() : publicNavbar()}
    </React.Fragment>
  );
}

export default Navigation;