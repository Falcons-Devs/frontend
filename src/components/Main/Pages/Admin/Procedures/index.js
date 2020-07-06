import React, { useEffect } from "react";
import { Container, Title, ArrowButton, CreateButton, Table } from "./styles";

export const Procedures = () => {
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
      <CreateButton>
        <h1>Boton</h1>
      </CreateButton>
      <Table>
        <h1>Tablas</h1>
      </Table>
    </Container>
  );
};
