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
    }}
  </Context.Consumer>
);
