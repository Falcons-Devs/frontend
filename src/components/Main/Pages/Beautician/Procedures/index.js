import React from "react";
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

export const Procedures = () => {
  return (
    <div>
      <Wrap>
        <Container>
          <ArrowButton>
            <NameStatus />
          </ArrowButton>
          <Hero>
            <HeaderImages numberImg="2" />
          </Hero>
          <ProceduresContainer>
            <h1>Procedures</h1>
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
