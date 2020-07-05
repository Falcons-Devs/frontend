import React from "react";
import {
  Container,
  Hero,
  DayCard,
  ScheduleCard,
  CancelButton,
  ConfirmButton,
  ArrowButton,
  Title,
} from "./styles";

export const Schedules = () => {
  return (
    <Container>
      <ArrowButton>
        <h1>Flecha</h1>
      </ArrowButton>
      <Title>
        <h1>Titulo</h1>
      </Title>
      <Hero>
        <h1>Imagen</h1>
      </Hero>
      <DayCard>
        <h1>Dias</h1>
      </DayCard>
      <ScheduleCard>
        <h1>Horario</h1>
      </ScheduleCard>
      <CancelButton>
        <h1>Cancelar</h1>
      </CancelButton>
      <ConfirmButton>
        <h1>Confirmar</h1>
      </ConfirmButton>
    </Container>
  );
};
