import React, { useEffect, useState } from "react";
import Axios from "axios";

// Import the components
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";
import { Table as TableInfo } from "../../../../Table";
import { CardInformation } from "../../../../CardInformation";

// Import the icons svg
import { IconArrowNext } from "../../../../../assets/static/icon-arrow-next";

// Import presentational components of styled components
import {
  Container,
  HistoryAppointments,
  RealizedProcedures,
  RealizedPayments,
  FollowingAppointments,
  Table,
  Main,
  Wrap,
  Select,
  SelectContainer,
} from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
export const ClientInformation = ({ clientId }) => {
  const [client, setClient] = useState("");
  useEffect(() => {
    window.scroll(0, 0);
    fetchData = async(e);
  });
  console.log(clientId);
  return (
    <Wrap>
      <Main>
        {/* Title creation and redirection arrow */}
        <NameStatus title="Informacion de [NAME]" to="/admin-clients" />
      </Main>
      <Container>
        {/* Button creation */}
        {screen.width <= 375 ? (
          <SelectContainer>
            <IconArrowNext width="50px" height="50px" fill="#de18ad" />
            <Select>
              <option value="historical" selected>
                Historial de citas
              </option>
              <option value="procedures">Procedimientos realizados</option>
              <option value="payments">Pagos realizados</option>
              <option value="appointments">Próximas citas</option>
            </Select>
          </SelectContainer>
        ) : (
          <>
            <HistoryAppointments>
              <Buttons
                value="Historial de citas"
                responsivetablet
                color="#de18ad"
              />
            </HistoryAppointments>
            <RealizedProcedures>
              <Buttons
                value="Procedimientos realizados"
                responsivetablet
                color="#de18ad"
              />
            </RealizedProcedures>
            <RealizedPayments>
              <Buttons
                value="Pagos realizados"
                responsivetablet
                color="#de18ad"
              />
            </RealizedPayments>
            <FollowingAppointments>
              <Buttons
                value="Próximas citas"
                responsivetablet
                color="#de18ad"
              />
            </FollowingAppointments>
          </>
        )}
        {/* Creating the customer table */}
        <Table>
          {screen.width <= 375 ? (
            <>
              <h2>Historial de citas</h2>
              <CardInformation name="Cita 1" />
              <CardInformation name="Cita 2" />
            </>
          ) : (
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
              data={[]}
            />
          )}
        </Table>
      </Container>
    </Wrap>
  );
};
