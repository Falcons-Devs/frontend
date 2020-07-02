import React from "react";
import { LogoOCSF } from "../../assets/static/logo-ocs-f";
import { Link } from "@reach/router";
import { NavBar } from "./NavBar";
import { HeaderStyle } from "./styles";

export const Header = () => (
  <HeaderStyle>
    <Link to="/" aria-label="Logo de OCS">
      <LogoOCSF width="260px" />
    </Link>
    <NavBar />
  </HeaderStyle>
);
