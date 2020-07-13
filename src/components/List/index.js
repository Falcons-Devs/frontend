import React from "react";
// Import the icons components
import { Loader } from "../Loader";
import { IconCheckboxFalse } from "../../assets/static/icon-checkbox-false";

// Import presentational components of styled components
import { Container, ProcedureContainer, P, Title } from "./styles";

export const List = ({ list, title, full, topic }) => {
  let content = [];
  for (const key in list) {
    if (title === "Procedimientos") {
      content.push(
        <ProcedureContainer key={Title + list[key].id}>
          <P>{list[key].name}</P>
          <input
            type="checkbox"
            value={list[key].id}
            id={topic + key}
            name="check"
          />
        </ProcedureContainer>
      );
    } else {
      content.push(
        <ProcedureContainer full={full} key={topic + list[key]}>
          <P>{list[key]}</P>
          <input
            type={topic === "Beautician" ? "radio" : "checkbox"}
            value={list[key]}
            id={topic + key}
            name="check"
          />
        </ProcedureContainer>
      );
    }
  }
  if (content.length === 0) return <Loader />;
  return (
    <Container id={topic}>
      {content}
      <Title>{title}</Title>
    </Container>
  );
};
