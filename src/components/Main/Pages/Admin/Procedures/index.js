import React, { useEffect } from "react";
import { Container, Main, Table, Wrap } from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";

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
          <h1>Tablas</h1>
        </Table>
      </Container>
    </Wrap>
  );
};
