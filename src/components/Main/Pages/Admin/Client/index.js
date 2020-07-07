import React, { useEffect } from "react";
import { Wrap, Container, ArrowButton, Title, Hero, Table } from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { BackgroudImages } from "../../../../HeaderImages/styles";

export const Client = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Container>
        <ArrowButton>
          <NameStatus title="Clientes" to="/admin" />
        </ArrowButton>
        <Hero>
          <BackgroudImages numberImg="3" />
        </Hero>
        <Table>
          <h1>Tabla</h1>
        </Table>
      </Container>
    </Wrap>
  );
};
