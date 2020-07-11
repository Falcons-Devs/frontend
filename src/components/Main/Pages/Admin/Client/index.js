import React, { useEffect } from "react";
import { Wrap, Container, ArrowButton, Title, Hero, Table } from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { BackgroudImages } from "../../../../HeaderImages/styles";
import { Table as TableInfo } from "../../../../Table";
import { CardPerson } from "../../../../CardPerson";

export const Client = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Container>
        {/* Title creation and redirection arrow */}
        <ArrowButton>
          <NameStatus title="Clientes" to="/admin" />
        </ArrowButton>
        <Hero>
          {/* Show image component according to number */}
          <BackgroudImages numberImg="3" />
        </Hero>
        {/* Creating the customer table */}
        <Table>
          {screen.width <= 375 ? (
            <>
              <CardPerson name="Cliente 1" to="/admin-client-info" />
              <CardPerson name="Cliente 2" to="/admin-client-info" />
              <CardPerson name="Cliente 3" to="/admin-client-info" />
              <CardPerson name="Cliente 4" to="/admin-client-info" />
            </>
          ) : (
            <TableInfo
              col1="#"
              col2="Nombre"
              col3="Email"
              col4="Ver más información"
              title="Home"
            />
          )}
        </Table>
      </Container>
    </Wrap>
  );
};
