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
import logoN from '../../img/logoN.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth, user } = useContext(AuthContext);

  const toggle = () => setIsOpen(!isOpen);

  const publicNavbar = () => {
    return (
      <Navbar
        className="navbar navbar-dark navColor tipografia"
        expand="md">
        <NavbarBrand tag={Link} to="/" className="tipografia">
          <img src={logoN} alt="logo Guali" className="navbar-img" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/signup" className="tipografia">Regístrate</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>)
  }

  const authNavbar = () => {
    return (
      <Navbar
        className="navbar navbar-dark navColor tipografia"
        expand="md">
        <img src={logoN} alt="logo Guali" className="navbar-img" />
        <NavbarBrand tag={Link} to="#" className="tipografia">¡Bienvenid@ {user.first_name} :D!</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/Historial" className="tipografia">Historial</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="#" className="tipografia">Reportes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="#" className="tipografia">Agregar un Ingreso</NavLink>
            </NavItem>
            <NavItem className="derecha tipografia">
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