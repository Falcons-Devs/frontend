import React from "react";
import { Container, ArrowButton, Title, Dairy } from "./styles";

export const Diary = () => {
  return (
    <Container>
      <ArrowButton>
        <h1>Flecha</h1>
      </ArrowButton>
      <Title>
        <h1>Titulo</h1>
      </Title>
      <Dairy>
        <h1>Agenda</h1>
      </Dairy>
    </Container>
  );
};
