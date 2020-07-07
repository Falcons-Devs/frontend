import React, { useEffect } from "react";
import { Container, Main, Table, Wrap } from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";
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
            <Buttons value="Crear procedimiento" color="#2DD881" />
          </Link>
        </Main>
        <Table>
          <h1>Tablas</h1>
        </Table>
      </Container>
    </Wrap>
  );
};
