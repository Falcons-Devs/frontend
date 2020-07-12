import React from "react";
import { Link } from "@reach/router";
import Context from "../../Context";

// Import the components navbar
import { NavBar } from "./NavBar";

// Import the icons components
import { LogoOCSF } from "../../assets/static/logo-ocs-f";
import { LogoOCS } from "../../assets/static/logo-ocs";

// Import presentational components of styled components
import { HeaderStyle, Wrap } from "./styles";

export const Header = () => (
  <Context.Consumer>
    {({ userType }) => {
      let to;
      if (userType === "Public") to = "/";
      if (userType === "Admin") to = "/admin";
      if (userType === "Client") to = "/client";
      if (userType === "Beautician") to = "/beautician";
      let logo = <LogoOCSF width="300px" height="62px" />;
      // Condition for show icons small and big  for the resolution screen table and mobileCondition for show incons small and  for the resolution screen
      if (screen.width <= 768) {
        logo = <LogoOCS width="90px" height="65px" />;
      }
      if (screen.width <= 375) {
        logo = <LogoOCS width="50px" height="50px" />;
      }
      return (
        <HeaderStyle>
          <Wrap>
            <Link to={to} aria-label="Logo de OCS">
              {logo}
            </Link>
            <NavBar />
          </Wrap>
        </HeaderStyle>
      );
    }}
  </Context.Consumer>
);
