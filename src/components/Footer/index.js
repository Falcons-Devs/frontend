import React from "react";

// Import the components Navbar
import { NavBarFooter } from "./NavBar";

// Import presentational components of styled components
import { FooterStyle, Wrap } from "./styles";

export const Footer = () => (
  <FooterStyle>
    <Wrap>
      <NavBarFooter />
    </Wrap>
  </FooterStyle>
);
