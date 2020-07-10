import React from "react";

import IconArrowBack from "../../assets/static/icon-arrow-back.png";

import { Status, Link } from "./styles";

export const NameStatus = ({ title, to }) => {
  return (
    <Status>
      <Link to={to}>
        <img src={IconArrowBack} alt="Ir Atras" />
      </Link>
      <h3>{title}</h3>
    </Status>
  );
};
