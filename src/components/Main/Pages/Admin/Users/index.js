import React from "react";
import { Container, ArrowButton, Title, CreateButton, Table } from "./styles";

export const Users = () => {
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
      <Table>
        <h1>Tabla</h1>
      </Table>
    </Container>
  );
};
