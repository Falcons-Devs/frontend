import React, { useEffect } from "react";
import { Container, Main, Table, Wrap } from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";
import { Table as TableInfo } from "../../../../Table";

export const Users = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Container>
        <Main>
          <NameStatus title="Ver usuarios" to="/admin" />
          <Buttons value="Crear usuario" color="#2DD881" />
        </Main>
        <Table>
          <TableInfo
            col1="#"
            col2="Nombre"
            col3="Email"
            col4="Tipo"
            col5="Editar usuarios"
            title="Procedimientos"
          />
        </Table>
      </Container>
    </Wrap>
  );
};
