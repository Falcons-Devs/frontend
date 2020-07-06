import React from "react";
import { Wrap, Container, ArrowButton } from "./styles";
import { ShowAppointmentHistory } from "../../../../ShowAppointmentHistory";
import { NameStatus } from "../../../../NameStatus";

export const AppointmentHistory = () => {
  return (
    <Wrap>
      <Container>
        <ArrowButton>
          <NameStatus title="Mi historial de citas" to={"/client"} />
        </ArrowButton>
        <ShowAppointmentHistory
          dateTime="01-08-2020"
          estheticianName="Esteticista 1"
          cost="$ 120"
          duration="2 horas"
          process="Descripcion del proceso"
        />
        <ShowAppointmentHistory
          dateTime="06-09-2020"
          estheticianName="Esteticista 3"
          cost="$ 260"
          duration="3 horas"
          process="Descripcion del proceso"
        />
        <ShowAppointmentHistory
          dateTime="03-10-2020"
          estheticianName="Esteticista 2"
          cost="$ 80"
          duration="1 horas"
          process="Descripcion del proceso"
        />
        <ShowAppointmentHistory
          dateTime="02-11-2020"
          estheticianName="Esteticista 4"
          cost="$ 400"
          duration="6 horas"
          process="Descripcion del proceso"
        />
      </Container>
    </Wrap>
  );
};
