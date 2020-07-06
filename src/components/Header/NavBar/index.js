import React from "react";
import { IconAvatar } from "../../../assets/static/icon-avatar";
import { Nav, Link } from "./styles";

export const NavBar = () => {
  return (
    <Nav>
      <Link to="/">Inicio</Link>
      <Link to="/about">Nosotros</Link>
      {/* <Link to="/agenda">Mi agenda</Link> */}
      <Link to="/signin">Registrarse</Link>
      {/* <Link to="/login">
        <IconAvatar fill="#DE18AD" /> Iniciar sesión
      </Link> */}
      <Link to="/login">Iniciar sesión</Link>
      {/* <Link to="/logout">Cerrar sesión</Link> */}
    </Nav>
  );
};
