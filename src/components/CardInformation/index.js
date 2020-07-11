import React from "react";

// Import presentational components of styled components
import { Container } from "./styles";

export const CardInformation = ({ name }) => {
  return (
    <Container>
      <h3>{name}</h3>
      <h4>Descripcion</h4>
      <p>Procedimiento 1</p>
      <p>Procedimiento 2</p>
      <p>Procedimiento 3</p>
    </Container>
  );
};
