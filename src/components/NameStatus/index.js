import React from "react";

import IconArrowBack from "../../assets/static/icon-arrow-back.png";

import { Status, Link } from "./styles";

export const NameStatus = () => {
  return (
    <Status>
      <Link to="history">
        <img src={IconArrowBack} alt="Ir Atras" />
      </Link>
      <h3>Mis horarios</h3>
    </Status>
  );
};
