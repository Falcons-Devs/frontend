import React, { useEffect } from "react";
import { Container, Main, Table, Wrap } from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";
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
            <Buttons value="Crear usuario" color="#2DD881" />
          </Link>
        </Main>
        <Table>
          <h1>Tabla</h1>
        </Table>
      </Container>
    </Wrap>
  );
};
