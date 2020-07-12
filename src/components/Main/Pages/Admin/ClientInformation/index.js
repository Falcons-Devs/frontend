import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Redirect } from "@reach/router";

// Import the components
import Context from "../../../../../Context";
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";
import { Table as TableInfo } from "../../../../Table";
import { CardInformation } from "../../../../CardInformation";
import { Loader } from "../../../../Loader";

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
  const [data, setData] = useState(false);
  const [topic, setTopic] = useState("");
  useEffect(() => {
    window.scroll(0, 0);
    const fetchData = async () => {
      const result = await Axios.get(
        `http://104.198.182.133/user/"${clientId}"`
      );
      setClient(result.data.body[0]);
      setData(true);
    };
    if (data === false) fetchData();
  });
  return (
    <Context.Consumer>
      {({ changeType }) => {
        changeType("Admin");
        if (!client) return <Loader />;
        let table, cards;
        if (topic === "History" || topic === "Following") {
          table = (
            <TableInfo
              col1="#"
              col2="Día"
              col3="Hora"
              col4="Esteticista"
              col5="Procedimientos"
              col6="Duración"
              col7="Costo"
              title={
                topic === "History" ? "Historial de citas" : "Próximas citas"
              }
              data={[]}
            />
          );
          cards = (
            <>
              <h2>
                {topic === "History" ? "Historial de citas" : "Próximas citas"}
              </h2>
              <CardInformation
                name="Cita 1"
                data={{
                  name: "Jessica Olmos",
                  day: "03/08/2020",
                  time: "18:00 horas",
                  duration: "2:00 horas",
                  procedures: [
                    "Procedimiento 1",
                    "Procedimiento 2",
                    "Procedimiento 3",
                  ],
                  cost: "$ 100",
                }}
                appointment
              />
            </>
          );
        }
        if (topic === "Procedures" || topic === "Payments") {
          table = (
            <TableInfo
              col1="#"
              col2={topic === "Procedures" ? "Nombre" : "Dia"}
              col3={topic === "Procedures" ? "Hora" : "Dia"}
              title={
                topic === "Procedures"
                  ? "Procedimientos realizados"
                  : "Pagos realizados"
              }
              data={[]}
            />
          );
          cards = (
            <>
              <h2>
                {topic === "Procedures"
                  ? "Procedimientos realizados"
                  : "Pagos realizados"}
              </h2>
              <CardInformation
                name={topic === "Procedures" ? "Procedimiento 1" : "Pago 1"}
                data={
                  topic === "Procedures"
                    ? { name: "Procedimiento 1", times: "2" }
                    : { day: "03/08/2020", time: "18:00 horas", cost: "$ 100" }
                }
                type={topic === "Procedures" ? "procedures" : "payments"}
              />
            </>
          );
        }
        return (
          <Wrap>
            <Main>
              {/* Title creation and redirection arrow */}
              <NameStatus
                title={`Informacion de ${client.name}`}
                to="/admin-clients"
              />
            </Main>
            <Container>
              {/* Button creation */}
              {screen.width <= 375 ? (
                <SelectContainer>
                  <IconArrowNext width="50px" height="50px" fill="#de18ad" />
                  <Select onChange={(e) => setTopic(e.target.value)}>
                    <option value="" selected disabled>
                      Elige una opcion
                    </option>
                    <option value="History">Historial de citas</option>
                    <option value="Procedures">
                      Procedimientos realizados
                    </option>
                    <option value="Payments">Pagos realizados</option>
                    <option value="Following">Próximas citas</option>
                  </Select>
                </SelectContainer>
              ) : (
                <>
                  <HistoryAppointments>
                    <Buttons
                      value="Historial de citas"
                      responsivetablet
                      color="#de18ad"
                      onClick={() => setTopic("History")}
                    />
                  </HistoryAppointments>
                  <RealizedProcedures>
                    <Buttons
                      value="Procedimientos realizados"
                      responsivetablet
                      color="#de18ad"
                      onClick={() => setTopic("Procedures")}
                    />
                  </RealizedProcedures>
                  <RealizedPayments>
                    <Buttons
                      value="Pagos realizados"
                      responsivetablet
                      color="#de18ad"
                      onClick={() => setTopic("Payments")}
                    />
                  </RealizedPayments>
                  <FollowingAppointments>
                    <Buttons
                      value="Próximas citas"
                      responsivetablet
                      color="#de18ad"
                      onClick={() => setTopic("Following")}
                    />
                  </FollowingAppointments>
                </>
              )}
              {/* Creating the customer table */}
              <Table>{screen.width <= 375 ? cards : table}</Table>
            </Container>
          </Wrap>
        );
      }}
    </Context.Consumer>
  );
};
