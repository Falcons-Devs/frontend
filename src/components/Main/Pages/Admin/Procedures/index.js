import React, { useEffect } from "react";
import { Container, Main, Table, Wrap } from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";
import { Table as TableInfo } from "../../../../Table";

export const Procedures = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Container>
        <Main>
          <NameStatus title="Ver procedimientos" to="/admin" />
          <Buttons value="Crear procedimiento" color="#2DD881" />
        </Main>
        <Table>
          <TableInfo
            col1="#"
            col2="Nombre"
            col3="Acciones"
            title="Procedimientos"
          />
        </Table>
      </Container>
    </Wrap>
  );
};
