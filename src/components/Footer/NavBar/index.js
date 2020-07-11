import React from "react";

// Import presentational components of styled components
import { Nav, Link, P } from "./styles";

export const NavBarFooter = () => {
  return (
    <Nav>
      <Link to="/terms">Terminos y condiciones</Link>
      <Link to="/notice">Aviso de privacidad</Link>
      <P>Copiryght © 2020</P>
    </Nav>
  );
};
