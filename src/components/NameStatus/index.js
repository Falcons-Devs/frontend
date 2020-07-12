import React from "react";

// Import the icons svg
import { IconArrowBack } from "../../assets/static/icon-arrow-back";

// Import presentational components of styled components
import { Status, Link } from "./styles";

export const NameStatus = ({ title, to }) => {
  return (
    <Status>
      {/* Title creation and redirection arrow */}
      <Link to={to}>
        <IconArrowBack fill="#de18ad" width="40px" height="40px" />
      </Link>
      <h3>{title}</h3>
    </Status>
  );
};
