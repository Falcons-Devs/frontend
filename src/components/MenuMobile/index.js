import React from "react";
import Context from "../../Context";

// Import presentational components of styled components
import { Menu, Link } from "./styles";

export const MenuMobile = () => (
  <Context.Consumer>
    {/* Show component with menu according to user */}
    {({ userType }) => {
      switch (userType) {
        case "Public":
          return (
            <Menu>
              <Link to="/">Inicio</Link>
              <Link to="/about">About</Link>
              <Link to="/signin">Registrarse</Link>
              <Link to="/login">Iniciar sesión</Link>
            </Menu>
          );
        case "Client":
          return (
            <Menu>
              <Link to="/client">Inicio</Link>
              <Link to="/about">About</Link>
              <Link to="/client-appointments">Mis citas</Link>
              <Link to="/logout">Cerrar sesión</Link>
            </Menu>
          );
        case "Beautician":
          return (
            <Menu>
              <Link to="/beautician">Inicio</Link>
              <Link to="/about">About</Link>
              <Link to="/beautician-diary">Mi agenda</Link>
              <Link to="/logout">Cerrar sesión</Link>
            </Menu>
          );
        case "Admin":
          return (
            <Menu>
              <Link to="/admin">Inicio</Link>
              <Link to="/about">About</Link>
              <Link to="/logout">Cerrar sesión</Link>
            </Menu>
          );
      }
    }}
  </Context.Consumer>
);
