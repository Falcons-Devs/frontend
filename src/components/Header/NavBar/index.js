import React from "react";
import { Nav, Link } from "./styles";

export const NavBar = () => {
  return (
    <Nav>
      <Link to="/about">Nosotros</Link>
      <Link to="/signin">Registrarse</Link>
      <Link to="/login">Iniciar sesión</Link>
    </Nav>
  );
};
