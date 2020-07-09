import React from "react";
import { LogoOCSF } from "../../assets/static/logo-ocs-f";
import { Link } from "@reach/router";
import { NavBar } from "./NavBar";
import { HeaderStyle, Wrap } from "./styles";
import { LogoOCS } from "../../assets/static/logo-ocs";

export const Header = () => {
  let logo = <LogoOCSF width="260px" />;
  if (screen.width <= 768) {
    logo = <LogoOCS width="90px" height="65px" />;
  }
  if (screen.width <= 375) {
    logo = <LogoOCS width="50px" height="50px" />;
  }
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
