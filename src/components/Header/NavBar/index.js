import React from "react";
import { IconAvatar } from "../../../assets/static/icon-avatar";
import { Nav, Link, Profile, NavMobile } from "./styles";
import Context from "../../../Context";
import { IconMenu } from "../../../assets/static/icon-menu";

export const NavBar = () => (
  <Context.Consumer>
    {({ userType }) => {
      if (userType === "Public") {
        if (screen.width <= 375) {
          return (
            <NavMobile>
              <Link to="/menu">
                <IconMenu fill="#FCFCFC" width="50px" height="50px" />
              </Link>
            </NavMobile>
          );
        }
        return (
          <Nav>
            <Link to="/">Inicio</Link>
            <Link to="/about">Nosotros</Link>
            <Link to="/signin">Registrarse</Link>
            <Link to="/login">Iniciar sesión</Link>
          </Nav>
        );
      }
      if (userType === "Admin") {
        return (
          <Nav>
            <Link to="/admin">Inicio</Link>
            <Link to="/about">Nosotros</Link>
            <Link to="#">Cerrar sesión</Link>
          </Nav>
        );
      }
      if (userType === "Client") {
        return (
          <Nav>
            <Link to="/client">Inicio</Link>
            <Link to="/about">Nosotros</Link>
            <Link to="/client-appointments">Mis citas</Link>
            <Profile>
              <IconAvatar fill="#DE18AD" />
            </Profile>
            <Link to="#">Cerrar sesión</Link>
          </Nav>
        );
      }
      if (userType === "Beautician") {
        return (
          <Nav>
            <Link to="/beautician">Inicio</Link>
            <Link to="/about">Nosotros</Link>
            <Link to="/beautician-diary">Ver agenda</Link>
            <Profile>
              <IconAvatar fill="#DE18AD" />
            </Profile>
            <Link to="#">Cerrar sesión</Link>
          </Nav>
        );
      }
    }}
  </Context.Consumer>
);
