import React from "react";
import { LogoOCSF } from "../../assets/static/logo-ocs-f";
import { Link } from "@reach/router";
import { NavBar } from "./NavBar";
import { HeaderStyle, Wrap } from "./styles";

export const Header = () => (
  <HeaderStyle>
    <Wrap>
      <Link to="/" aria-label="Logo de OCS">
        <LogoOCSF width="260px" />
      </Link>
      <NavBar />
    </Wrap>
  </HeaderStyle>
);
