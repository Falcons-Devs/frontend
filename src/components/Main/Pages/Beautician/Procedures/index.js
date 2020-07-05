import React from "react";
import {
  Container,
  ArrowButton,
  Title,
  Hero,
  Procedures as ProceduresContainer,
  CancelButton,
  ConfirmButton,
} from "./styles";

export const Procedures = () => {
  return (
    <Container>
      <ArrowButton>
        <h1>Flecha</h1>
      </ArrowButton>
      <Title>
        <h1>Titulo</h1>
      </Title>
      <Hero>
        <h1>Hero</h1>
      </Hero>
      <ProceduresContainer>
        <h1>Procedures</h1>
      </ProceduresContainer>
      <CancelButton>
        <h1>Cancel</h1>
      </CancelButton>
      <ConfirmButton>
        <h1>Confirm</h1>
      </ConfirmButton>
    </Container>
  );
};
