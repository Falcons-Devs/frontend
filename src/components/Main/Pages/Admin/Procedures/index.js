import React, { useEffect } from "react";

// Import the components
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";
import { Table as TableInfo } from "../../../../Table";
import { MobileProcedure } from "../../../../MobileProcedure";

// Import the icons svg
import { IconAdd } from "../../../../../assets/static/icon-add";

// Import the Navigation Link
import { Link } from "@reach/router";

// Import presentational components of styled components
import { Container, Main, Table, Wrap, ProcedureContainer } from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
export const Procedures = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Container>
        <Main>
          {/* Title creation, creation button and redirection arrow */}
          <NameStatus title="Procedimientos" to="/admin" />
          <Link to="/admin-create-procedure">
            {screen.width <= 375 ? (
              <IconAdd width="50px" height="50px" fill="#2DD881" />
            ) : (
              <Buttons
                value="Crear procedimiento"
                responsivetablet
                color="#2DD881"
              />
            )}
          </Link>
        </Main>
        {/* Creating the customer table */}
        <Table>
          {screen.width <= 375 ? (
            <ProcedureContainer>
              <MobileProcedure value="Procedimiento 1" />
              <MobileProcedure value="Procedimiento 2" />
              <MobileProcedure value="Procedimiento 3" />
              <MobileProcedure value="Procedimiento 4" />
              <MobileProcedure value="Procedimiento 5" />
            </ProcedureContainer>
          ) : (
            <TableInfo
              col1="#"
              col2="Nombre"
              col3="Acciones"
              title="Procedimientos"
            />
          )}
        </Table>
      </Container>
    </Wrap>
  );
};
