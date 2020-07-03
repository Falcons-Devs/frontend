import React from "react";
import { Nav, Link, P } from "./styles";

export const NavBarFooter = () => {
  return (
    <Nav>
      <Link to="/terminos">Terminos y condiciones</Link>
      <Link to="/aviso">Aviso de privacidad</Link>
      <P>Copiryght © 2020</P>
    </Nav>
  );
};
