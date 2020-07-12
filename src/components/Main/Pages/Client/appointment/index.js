import React, { useEffect } from "react";

// Import the components
import Context from "../../../../../Context";
import { Buttons } from "../../../../Buttons";
import { NameStatus } from "../../../../NameStatus";
import { Schedule as ShowSchedule } from "../../../../Schedule";
import { List } from "../../../../List";

// Import presentational components of styled components
import {
  Wrap,
  Container,
  ArrowButton,
  Beautician,
  Procedures,
  Schedule,
  ConfirmButton,
} from "./styles";

const listBeauticians = [
  "Esteticista 1",
  "Esteticista 2",
  "Esteticista 3",
  "Esteticista 4",
  "Esteticista 5",
  "Esteticista 6",
  "Esteticista 7",
  "Esteticista 8",
  "Esteticista 9",
  "Esteticista 10",
  "Esteticista 11",
  "Esteticista 12",
];

const listProcedures = [
  "Procedimiento 1",
  "Procedimiento 2",
  "Procedimiento 3",
  "Procedimiento 4",
  "Procedimiento 5",
  "Procedimiento 6",
  "Procedimiento 7",
  "Procedimiento 8",
  "Procedimiento 9",
  "Procedimiento 10",
  "Procedimiento 11",
  "Procedimiento 12",
  "Procedimiento 13",
  "Procedimiento 14",
  "Procedimiento 15",
];

// Import useEffect So that when the user changes the page it goes to the top
export const CreateAppointment = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Context.Consumer>
      {({ changeType, token }) => {
        changeType("Client");
        return (
          <Wrap>
            <Container>
              <ArrowButton>
                <NameStatus title="Crear cita" to={"/client"} />
              </ArrowButton>
              <Beautician>
                <List
                  list={listBeauticians}
                  topic="Beautician"
                  title="Elige esteticista"
                />
              </Beautician>
              <Procedures>
                <List
                  list={listProcedures}
                  topic="Procedure"
                  title="Elige procedimientos"
                />
              </Procedures>
              <Schedule>
                <ShowSchedule title="Elige un horario" />
              </Schedule>
              <ConfirmButton>
                <Buttons value="Crear cita" color="#2DD881" />
              </ConfirmButton>
            </Container>
          </Wrap>
        );
      }}
    </Context.Consumer>
  );
};
