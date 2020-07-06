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
            <h1>Cancel</h1>
          </CancelButton>
          <ConfirmButton>
            <h1>Confirm</h1>
          </ConfirmButton>
        </Container>
      </Wrap>
    </div>
  );
};
