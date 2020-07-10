import React from "react";
import {
  Container,
  ProceduresContainer,
  DurationContainer,
  ClientContainer,
} from "./styles";
import { IconAccountCircle } from "../../assets/static/icon-accountCircle";

export const MobileDiary = ({ datetime, time, client }) => {
  return (
    <Container>
      <h2>{datetime}</h2>
      <ProceduresContainer>
        <h3>Procedimientos</h3>
        <p>Procedimiento 1</p>
        <p>Procedimiento 2</p>
        <p>Procedimiento 3</p>
      </ProceduresContainer>
      <DurationContainer>
        <h3>Duracion:</h3>
        <p>{time}</p>
      </DurationContainer>
      <ClientContainer>
        <IconAccountCircle fill="#de18ad" />
        <p>{client}</p>
      </ClientContainer>
    </Container>
  );
};
