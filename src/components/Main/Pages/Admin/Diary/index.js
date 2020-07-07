import React, { useEffect } from "react";
import { Container, ArrowButton, Wrap, Table } from "./styles";
import { NameStatus } from "../../../../NameStatus";

export const Diary = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Container>
        <ArrowButton>
          <NameStatus title="Agenda de [NAME]" to="/admin-beautician" />
        </ArrowButton>
        <Table>
          <h1>Tabla</h1>
        </Table>
      </Container>
    </Wrap>
  );
};
