import React, { useEffect } from "react";

// Import the components
import { NameStatus } from "../../../../NameStatus";
import { HeaderImages } from "../../../../HeaderImages";
import { AdminForms } from "../../../../AdminForms";

// Import presentational components of styled components
import { Container, Main, Hero, Wrap } from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
export const EditUser = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Container>
        <Main>
          {/* Title creation and redirection arrow */}
          <NameStatus title="Editar usuario" to="/admin-users" />
        </Main>
        <Hero>
          {/* Show image component according to number */}
          <HeaderImages numberImg="4" />
        </Hero>
        {/* Form creation */}
        <AdminForms
          actionUser="Editar Usuario"
          type="Usuario"
          buttonAction="Editar"
        />
      </Container>
    </Wrap>
  );
};
