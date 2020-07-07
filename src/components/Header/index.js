import React from "react";
import { LogoOCSF } from "../../assets/static/logo-ocs-f";
import { Link } from "@reach/router";
import { NavBar } from "./NavBar";
import { HeaderStyle, Wrap } from "./styles";
import { LogoOCS } from "../../assets/static/logo-ocs";

export const Header = () => {
  const logo =
    screen.width <= 768 ? (
      <LogoOCS width="100px" height="75px" />
    ) : (
      <LogoOCSF width="260px" />
    );
  return (
    <HeaderStyle>
      <Wrap>
        <Link to="/" aria-label="Logo de OCS">
          {logo}
        </Link>
        <NavBar />
      </Wrap>
    </HeaderStyle>
  );
};
