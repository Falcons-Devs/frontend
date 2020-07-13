import React from "react";

// Import the icons components
import { IconCheckboxFalse } from "../../assets/static/icon-checkbox-false";

// Import presentational components of styled components
import { Container, ProcedureContainer, P, Title } from "./styles";

export const List = ({ list, title, full, topic }) => {
  let content = [];
  for (const key in list) {
    content.push(
      <ProcedureContainer full={full} key={topic + list[key].id}>
        <P>{list[key].name}</P>
        <input
          type={topic === "Beautician" ? "radio" : "checkbox"}
          value={list[key].id}
          id={topic + key}
          name="check"
        />
      </ProcedureContainer>
    );
  }
  return (
    <Container id={topic}>
      {content}
      <Title>{title}</Title>
    </Container>
  );
};
