import React, { useEffect } from "react";
import {
  Wrap,
  Container,
  ArrowButton,
  Hero,
  Procedures as ProceduresContainer,
  CancelButton,
  ConfirmButton,
} from "./styles";
import { Buttons } from "../../../../Buttons";
import { NameStatus } from "../../../../NameStatus";
import { HeaderImages } from "../../../../HeaderImages";
import { List } from "../../../../List";

const list = [
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
  "Procedimiento 11",
  "Procedimiento 12",
  "Procedimiento 13",
  "Procedimiento 14",
  "Procedimiento 15",
];

export const Procedures = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div>
      <Wrap>
        <Container>
          <ArrowButton>
            <NameStatus title="Mis procedimientos" to={"/beautician"} />
          </ArrowButton>
          <Hero>
            <HeaderImages numberImg="2" />
          </Hero>
          <ProceduresContainer>
            <List list={list} title="Procedimientos" />
          </ProceduresContainer>
          <CancelButton>
            <Buttons value="Cancelar" color="#DE3C48" />
          </CancelButton>
          <ConfirmButton>
            <Buttons value="Confirmar" color="#2DD881" />
          </ConfirmButton>
        </Container>
      </Wrap>
    </div>
  );
};
