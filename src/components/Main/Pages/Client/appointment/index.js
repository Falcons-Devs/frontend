import React, { useEffect } from "react";
import {
  Wrap,
  Container,
  ArrowButton,
  Beautician,
  Procedures,
  Calendar,
  CancelButton,
  ConfirmButton,
} from "./styles";
import { Buttons } from "../../../../Buttons";
import { NameStatus } from "../../../../NameStatus";
import { List } from "../../../../List";
import { Link } from "@reach/router";

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

export const CreateAppointment = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Container>
        <ArrowButton>
          <NameStatus title="Crear cita" to={"/client"} />
        </ArrowButton>
        <Beautician>
          <List list={listBeauticians} title="Elige esteticista" />
        </Beautician>
        <Procedures>
          <List list={listProcedures} title="Elige procedimientos" />
        </Procedures>
        <Calendar>
          <h1>Calendario</h1>
        </Calendar>
        <CancelButton>
          <Link to="/client">
            <Buttons value="Cancelar" color="#DE3C48" />
          </Link>
        </CancelButton>
        <ConfirmButton>
          <Buttons value="Confirmar" color="#2DD881" />
        </ConfirmButton>
      </Container>
    </Wrap>
  );
};
