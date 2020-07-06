import React, { useEffect } from "react";
import { Container, ArrowButton, Title, Table } from "./styles";

export const Diary = () => {
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
      <Table>
        <h1>Tabla</h1>
      </Table>
    </Container>
  );
};
