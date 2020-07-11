import React, { useEffect } from "react";
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
import { Link } from "@reach/router";

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
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div>
      <Wrap>
        <Container>
          <ArrowButton>
            {/* Title creation and redirection arrow */}
            <NameStatus title="Mis horarios" to={"/beautician"} />
          </ArrowButton>
          <Hero>
            {/* Show image component according to number */}
            <HeaderImages numberImg="1" />
          </Hero>
          <DayCard>
            {/* Show list component */}
            <List list={days} topic="Dia" title="Días" />
          </DayCard>
          <ScheduleCard>
            {/* Show list component */}
            <List list={schedules} topic="Horario" title="Horario" full />
          </ScheduleCard>
          {/* Show component of cancel button */}
          <CancelButton>
            <Link to="/beautician">
              <Buttons value="Cancelar" color="#DE3C48" />
            </Link>
          </CancelButton>
          {/* Show component of accept button */}
          <ConfirmButton>
            <Buttons value="Confirmar" color="#2DD881" />
          </ConfirmButton>
        </Container>
      </Wrap>
    </div>
  );
};
