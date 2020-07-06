import React, { useEffect } from "react";
import { Container, ArrowButton, Dairy } from "./styles";
import { NameStatus } from "../../../../NameStatus";

export const Diary = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Container>
      <ArrowButton>
        <NameStatus title="Ver agenda" to={"/beautician"} />
      </ArrowButton>
      <Dairy>
        <h1>Agenda</h1>
      </Dairy>
    </Container>
  );
};
