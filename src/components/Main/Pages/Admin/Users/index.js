import React, { useEffect } from "react";
import { Container, Main, Table, Wrap } from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";
import { Table as TableInfo } from "../../../../Table";
import { Link } from "@reach/router";

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
            <Buttons value="Crear usuario" responsivetablet color="#2DD881" />
          </Link>
        </Main>
        <Table>
          <TableInfo
            col1="#"
            col2="Nombre"
            col3="Email"
            col4="Tipo"
            col5="Editar usuarios"
            title="Usuarios"
          />
        </Table>
      </Container>
    </Wrap>
  );
};
