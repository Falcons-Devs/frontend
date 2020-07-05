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
import { Buttons } from "../../../../Buttons";

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
        <Buttons value="Cancelar" color="#DE3C48" />
      </CancelButton>
      <ConfirmButton>
        <Buttons value="Confirmar" color="#2DD881" />
      </ConfirmButton>
    </Container>
  );
};
