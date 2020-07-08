import React from "react";
import { Container, ProcedureContainer, P, Title } from "./styles";

import { IconCheckboxFalse } from "../../assets/static/icon-checkbox-false";

export const List = ({ list, title, full, topic }) => {
  return (
    <Container>
      {list.map((item, index) => (
        <ProcedureContainer full={full} key={topic + index}>
          <P>{item}</P>
          <IconCheckboxFalse width="24px" />
        </ProcedureContainer>
      ))}
      <Title>{title}</Title>
    </Container>
  );
};
