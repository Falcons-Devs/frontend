import React from "react";

// Import the components
import Context from "../../../Context";
import { IconAvatar } from "../../../assets/static/icon-avatar";
import { IconMenu } from "../../../assets/static/icon-menu";

// Import presentational components of styled components
import { Nav, Link, Profile, NavMobile } from "./styles";

export const NavBar = () => (
  <Context.Consumer>
    {({ userType }) => {
      switch (userType) {
        case "Public":
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

        case "Client":
          if (screen.width <= 375) {
            return (
              <NavMobile>
                <Profile>
                  <IconAvatar fill="#DE18AD" width="48px" height="48px" />
                </Profile>
                <Link to="/menu">
                  <IconMenu fill="#FCFCFC" width="50px" height="50px" />
                </Link>
              </NavMobile>
            );
          }
          return (
            <Nav>
              <Link to="/client">Inicio</Link>
              <Link to="/about">Nosotros</Link>
              <Link to="/client-appointments">Mis citas</Link>
              <Profile>
                <IconAvatar fill="#DE18AD" />
              </Profile>
              <Link to="/logout">Cerrar sesión</Link>
            </Nav>
          );

        case "Beautician":
          if (screen.width <= 375) {
            return (
              <NavMobile>
                <Profile>
                  <IconAvatar fill="#DE18AD" width="48px" height="48px" />
                </Profile>
                <Link to="/menu">
                  <IconMenu fill="#FCFCFC" width="50px" height="50px" />
                </Link>
              </NavMobile>
            );
          }
          return (
            <Nav>
              <Link to="/beautician">Inicio</Link>
              <Link to="/about">Nosotros</Link>
              <Link to="/beautician-diary">Ver agenda</Link>
              <Profile>
                <IconAvatar fill="#DE18AD" />
              </Profile>
              <Link to="/logout">Cerrar sesión</Link>
            </Nav>
          );

        case "Admin":
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
              <Link to="/admin">Inicio</Link>
              <Link to="/about">Nosotros</Link>
              <Link to="/logout">Cerrar sesión</Link>
            </Nav>
          );
      }
    }}
  </Context.Consumer>
);
