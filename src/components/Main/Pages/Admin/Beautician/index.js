import React from "react";
import {
  Container,
  ArrowButton,
  Title,
  CreateButton,
  Beautician as BeauticianContainer,
} from "./styles";

export const Beautician = () => {
  return (
    <Container>
      <ArrowButton>
        <h1>Flecha</h1>
      </ArrowButton>
      <Title>
        <h1>Titulo</h1>
      </Title>
      <CreateButton>
        <h1>Crear</h1>
      </CreateButton>
      <BeauticianContainer>
        <h1>Esteticistas</h1>
      </BeauticianContainer>
    </Container>
  );
};
