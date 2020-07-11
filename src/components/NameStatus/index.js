import React from "react";

// Import the icons svg
import IconArrowBack from "../../assets/static/icon-arrow-back.png";

// Import presentational components of styled components
import { Status, Link } from "./styles";

export const NameStatus = ({ title, to }) => {
  return (
    <Status>
      {/* Title creation and redirection arrow */}
      <Link to={to}>
        <img src={IconArrowBack} alt="Ir Atras" />
      </Link>
      <h3>{title}</h3>
    </Status>
  );
};
