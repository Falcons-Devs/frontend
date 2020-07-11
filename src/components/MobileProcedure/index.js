import React from "react";

// Import the icons svg
import { IconDelete } from "../../assets/static/icon-delete";

// Import presentational components of styled components
import { Container } from "./styles";

export const MobileProcedure = ({ value }) => {
  return (
    <Container>
      <p>{value}</p>
      <IconDelete fill="#de18ad" width="50px" heigth="50px" />
    </Container>
  );
};
