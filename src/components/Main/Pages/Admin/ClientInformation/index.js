import React, { useEffect } from "react";
import {
  Container,
  ArrowButton,
  Title,
  HistoryAppointments,
  RealizedProcedures,
  RealizedPayments,
  FollowingAppointments,
  Table,
} from "./styles";

export const ClientInformation = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Container>
      <ArrowButton>
        <h1>Flecha</h1>
      </ArrowButton>
      <Title>
        <h1>Titulo</h1>
      </Title>
      <HistoryAppointments>
        <h1>Historial</h1>
      </HistoryAppointments>
      <RealizedProcedures>
        <h1>Procedimientos</h1>
      </RealizedProcedures>
      <RealizedPayments>
        <h1>Pagos</h1>
      </RealizedPayments>
      <FollowingAppointments>
        <h1>Citas</h1>
      </FollowingAppointments>
      <Table>
        <h1>Tabla</h1>
      </Table>
    </Container>
  );
};
