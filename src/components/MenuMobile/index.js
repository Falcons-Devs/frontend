import React from "react";
import Context from "../../Context";
import { Menu, Link } from "./styles";

export const MenuMobile = () => (
  <Context.Consumer>
    {({ userType }) => {
      if (userType === "Public") {
        return (
          <Menu>
            <Link to="/">Inicio</Link>
            <Link to="/about">About</Link>
            <Link to="/signin">Registrarse</Link>
            <Link to="/login">Iniciar sesión</Link>
          </Menu>
        );
      }
      if (userType === "Client") {
        return (
          <Menu>
            <Link to="/client">Inicio</Link>
            <Link to="/about">About</Link>
            <Link to="/client-appointments">Mis citas</Link>
            <Link to="#">Cerrar sesión</Link>
          </Menu>
        );
      }
      if (userType === "Beautician") {
        return (
          <Menu>
            <Link to="/beautician">Inicio</Link>
            <Link to="/about">About</Link>
            <Link to="/beautician-diary">Mi agenda</Link>
            <Link to="#">Cerrar sesión</Link>
          </Menu>
        );
      }
    }}
  </Context.Consumer>
);
