import React, { useEffect } from "react";
import { Container, Main, Table, Wrap } from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";
import { Table as TableInfo } from "../../../../Table";
import { Link } from "@reach/router";

export const Procedures = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Container>
        <Main>
          <NameStatus title="Ver procedimientos" to="/admin" />
          <Link to="/admin-create-procedure">
            <Buttons
              value="Crear procedimiento"
              responsivetablet
              color="#2DD881"
            />
          </Link>
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
