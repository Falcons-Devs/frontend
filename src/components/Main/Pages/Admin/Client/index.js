import React, { useEffect } from "react";

// Import the components
import { NameStatus } from "../../../../NameStatus";
import { Table as TableInfo } from "../../../../Table";
import { CardPerson } from "../../../../CardPerson";

// Import presentational components of styled components
import { BackgroudImages } from "../../../../HeaderImages/styles";
import { Wrap, Container, ArrowButton, Title, Hero, Table } from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
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
