import React, { useEffect } from "react";

// Import the components
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";
import { Table as TableInfo } from "../../../../Table";
import { CardPerson } from "../../../../CardPerson";

// Import the icons svg
import { IconAdd } from "../../../../../assets/static/icon-add";

// Import the Navigation Link
import { Link } from "@reach/router";

// Import presentational components of styled components
import { Container, Main, Table, Wrap } from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
export const Users = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Container>
        <Main>
          {/* Title creation, creation button and redirection arrow */}
          <NameStatus title="Ver usuarios" to="/admin" />
          <Link to="/admin-create-user">
            {screen.width <= 375 ? (
              <IconAdd width="40px" height="40px" fill="#2DD881" />
            ) : (
              <Buttons value="Crear usuario" responsivetablet color="#2DD881" />
            )}
          </Link>
        </Main>
        {/* Creating the customer table */}
        <Table>
          {screen.width <= 375 ? (
            <>
              <CardPerson
                name="Manolo Fernandez"
                to="/admin-edit-user"
                type="Usuario"
              />
              <CardPerson
                name="Gustabo Garcia"
                to="/admin-edit-user"
                type="Cliente"
              />
            </>
          ) : (
            <TableInfo
              col1="#"
              col2="Nombre"
              col3="Email"
              col4="Tipo"
              col5="Editar usuarios"
              title="Usuarios"
            />
          )}
        </Table>
      </Container>
    </Wrap>
  );
};
