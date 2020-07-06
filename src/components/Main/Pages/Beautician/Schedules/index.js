import React from "react";
import {
  Container,
  Hero,
  DayCard,
  ScheduleCard,
  CancelButton,
  ConfirmButton,
  ArrowButton,
  Wrap,
} from "./styles";
import { Buttons } from "../../../../Buttons";
import { NameStatus } from "../../../../NameStatus";
import { HeaderImages } from "../../../../HeaderImages";
import { List } from "../../../../List";

const days = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
const schedules = ["8:00 - 14:00", "15:00 - 21:00"];

export const Schedules = () => {
  return (
    <div>
      <Wrap>
        <Container>
          <ArrowButton>
            <NameStatus title="Mis horarios" to={"/beautician"} />
          </ArrowButton>
          <Hero>
            <HeaderImages numberImg="1" />
          </Hero>
          <DayCard>
            <List list={days} title="Días" />
          </DayCard>
          <ScheduleCard>
            <List list={schedules} title="Horario" full />
          </ScheduleCard>
          <CancelButton>
            <Buttons value="Cancelar" color="#DE3C48" />
          </CancelButton>
          <ConfirmButton>
            <Buttons value="Confirmar" color="#2DD881" />
          </ConfirmButton>
        </Container>
      </Wrap>
    </div>
  );
};
