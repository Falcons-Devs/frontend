import React, { useEffect } from "react";
import { Container, Main, Table, Wrap } from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";
import { Table as TableInfo } from "../../../../Table";
import { Link } from "@reach/router";
import { IconAdd } from "../../../../../assets/static/icon-add";
import { CardPerson } from "../../../../CardPerson";

export const Users = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Container>
        <Main>
          <NameStatus title="Ver usuarios" to="/admin" />
          <Link to="/admin-create-user">
            {screen.width <= 375 ? (
              <IconAdd width="40px" height="40px" fill="#2DD881" />
            ) : (
              <Buttons value="Crear usuario" responsivetablet color="#2DD881" />
            )}
          </Link>
        </Main>
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
