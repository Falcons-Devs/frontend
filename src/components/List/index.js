import React from "react";
import { Container, ProcedureContainer, P, Title } from "./styles";

import { IconCheckboxFalse } from "../../assets/static/icon-checkbox-false";

export const List = ({ list, title, full }) => {
  return (
    <Container>
      {list.map((item) => (
        <ProcedureContainer full={full}>
          <P>{item}</P>
          <IconCheckboxFalse />
        </ProcedureContainer>
      ))}
      <Title>{title}</Title>
    </Container>
  );
};
