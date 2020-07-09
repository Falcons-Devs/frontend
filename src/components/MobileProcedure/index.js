import React from "react";
import { IconDelete } from "../../assets/static/icon-delete";
import { Container } from "./styles";

export const MobileProcedure = ({ value }) => {
  return (
    <Container>
      <p>{value}</p>
      <IconDelete fill="#de18ad" width="50px" heigth="50px" />
    </Container>
  );
};
