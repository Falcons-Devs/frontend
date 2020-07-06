import React, { useEffect } from "react";
import { Container, ArrowButton, Title, Hero, Table } from "./styles";

export const Client = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
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
      <Table>
        <h1>Tabla</h1>
      </Table>
    </Container>
  );
};
