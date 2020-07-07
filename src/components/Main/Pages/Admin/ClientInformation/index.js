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
import { Table as TableInfo } from "../../../../Table";

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
          <TableInfo
            col1="#"
            col2="Día"
            col3="Hora"
            col4="Esteticista"
            col5="Procedimientos"
            col6="Duración"
            col7="Horas"
            col8="Costos"
            title="[Citas | Procedimientos | Pagos | Futuras citas ] "
          />
        </Table>
      </Container>
    </Wrap>
  );
};
