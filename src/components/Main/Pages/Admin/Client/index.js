import React, { useEffect } from "react";
import { Wrap, Container, ArrowButton, Title, Hero, Table } from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { BackgroudImages } from "../../../../HeaderImages/styles";
import { Table as TableInfo } from "../../../../Table";

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
          <TableInfo
            col1="#"
            col2="Nombre"
            col3="Email"
            col4="Ver más información"
            title="Home"
          />
        </Table>
      </Container>
    </Wrap>
  );
};
