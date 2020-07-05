import React from "react";
import {
  Container,
  ArrowButton,
  Title,
  Beautician,
  Calendar,
  Procedures,
  CreateButton,
} from "./styles";

export const CreateAppointment = () => {
  return (
    <Container>
      <ArrowButton>
        <h1>Flecha</h1>
      </ArrowButton>
      <Title>
        <h1>Titulo</h1>
      </Title>
      <Beautician>
        <h1>Esteticista</h1>
      </Beautician>
      <Calendar>
        <h1>Calendario</h1>
      </Calendar>
      <Procedures>
        <h1>Procedimientos</h1>
      </Procedures>
      <CreateButton>
        <h1>Crear boton</h1>
      </CreateButton>
    </Container>
  );
};
