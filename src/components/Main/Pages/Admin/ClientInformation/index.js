import React, { useEffect } from "react";
import {
  Container,
  HistoryAppointments,
  RealizedProcedures,
  RealizedPayments,
  FollowingAppointments,
  Table,
  Main,
  Wrap,
} from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";

export const ClientInformation = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Main>
        <NameStatus title="Informacion de [NAME]" to="/admin-clients" />
      </Main>
      <Container>
        <HistoryAppointments>
          <Buttons value="Historial de citas" color="#de18ad" />
        </HistoryAppointments>
        <RealizedProcedures>
          <Buttons value="Procedimientos realizados" color="#de18ad" />
        </RealizedProcedures>
        <RealizedPayments>
          <Buttons value="Pagos realizados" color="#de18ad" />
        </RealizedPayments>
        <FollowingAppointments>
          <Buttons value="Próximas citas" color="#de18ad" />
        </FollowingAppointments>
        <Table>
          <h1>Tabla</h1>
        </Table>
      </Container>
    </Wrap>
  );
};
