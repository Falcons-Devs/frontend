import React from "react";
import { Container, ArrowButton, Title, Appointments } from "./styles";

export const Appointment = () => {
  return (
    <Container>
      <ArrowButton>
        <h1>Flecha</h1>
      </ArrowButton>
      <Title>
        <h1>Titulo</h1>
      </Title>
      <Appointments>
        <h1>Citas</h1>
      </Appointments>
    </Container>
  );
};
