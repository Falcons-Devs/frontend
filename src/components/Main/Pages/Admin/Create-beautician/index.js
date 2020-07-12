import React, { useEffect } from "react";

// Import the components
import Context from "../../../../../Context";
import { NameStatus } from "../../../../NameStatus";
import { HeaderImages } from "../../../../HeaderImages";
import { AdminForms } from "../../../../AdminForms";

// Import presentational components of styled components
import { Container, Main, Hero, Wrap } from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
export const CreateBeautician = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Context.Consumer>
      {({ changeType }) => {
        changeType("Admin");
        return (
          <Wrap>
            <Container>
              <Main>
                {/* Title creation and redirection arrow */}
                <NameStatus title="Crear esteticista" to="/admin-beautician" />
              </Main>
              <Hero>
                {/* Show image component according to number */}
                <HeaderImages numberImg="2" />
              </Hero>
              {/* Form creation */}
              <AdminForms
                actionUser="Crear Esteticista"
                type="Esteticista"
                buttonAction="Crear"
              />
            </Container>
          </Wrap>
        );
      }}
    </Context.Consumer>
  );
};
