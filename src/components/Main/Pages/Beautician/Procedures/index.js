import React, { useEffect } from "react";

// Import the components
import { Buttons } from "../../../../Buttons";
import { NameStatus } from "../../../../NameStatus";
import { HeaderImages } from "../../../../HeaderImages";
import { List } from "../../../../List";

// Import the Navigation Link
import { Link } from "@reach/router";

// Import presentational components of styled components
import {
  Wrap,
  Container,
  ArrowButton,
  Hero,
  Procedures as ProceduresContainer,
  CancelButton,
  ConfirmButton,
} from "./styles";

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

// Import useEffect So that when the user changes the page it goes to the top
export const Procedures = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div>
      <Wrap>
        <Container>
          <ArrowButton>
            {/* Title creation and redirection arrow */}
            <NameStatus title="Mis procedimientos" to={"/beautician"} />
          </ArrowButton>
          <Hero>
            {/* Show image component according to number */}
            <HeaderImages numberImg="2" />
          </Hero>
          <ProceduresContainer>
            {/* Show list component */}
            <List list={list} title="Procedimientos" />
          </ProceduresContainer>
          {/* Show component of cancel button */}
          <CancelButton>
            <Link to="/beautician">
              <Buttons value="Cancelar" color="#DE3C48" />
            </Link>
          </CancelButton>
          {/* Show component of accept button */}
          <ConfirmButton>
            <Buttons value="Confirmar" color="#2DD881" />
          </ConfirmButton>
        </Container>
      </Wrap>
    </div>
  );
};
