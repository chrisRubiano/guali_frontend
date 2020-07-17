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
        className="navbar navbar-dark navColor tipografia tGrande"
        expand="md">
        <NavbarBrand tag={Link} to="/" className="tipografia">
          <img src={logoN} alt="logo Guali" className="navbar-img" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/signup" style={{ color: "white" }} className="tipografia">Regístrate</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>)
  }

  const authNavbar = () => {
    return (
      <Navbar
        className="navbar navbar-dark navColor tipografia tGrande"
        expand="md">
        <img src={logoN} alt="logo Guali" className="navbar-img" />
        <NavbarBrand tag={Link} to="#" className="tipografia" style={{ backgroundColor: "#EF476F"}} >¡Bienvenid@ {user.first_name} :D!</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/Balance" style={{ color: "white"}} className="mar tipografia">Balance</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="#" style={{ color: "white" }} className="mar tipografia">Reportes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="#" style={{ color: "white"}} className="mar tipografia">Agregar un Ingreso</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/logout" style={{ color: "white" }} className="mar derecha tipografia">Cerrar Sesión</NavLink>
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