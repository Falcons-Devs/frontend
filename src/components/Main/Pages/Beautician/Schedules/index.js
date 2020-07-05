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
import { Buttons } from "../../../../Buttons";

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
        <Buttons value="Cancelar" color="#DE3C48" />
      </CancelButton>
      <ConfirmButton>
        <Buttons value="Confirmar" color="#2DD881" />
      </ConfirmButton>
    </Container>
  );
};
