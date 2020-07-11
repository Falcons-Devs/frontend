import React, { useEffect } from "react";
import { Container, Main, Hero, Wrap } from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { HeaderImages } from "../../../../HeaderImages";
import { AdminForms } from "../../../../AdminForms";

export const CreateBeautician = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
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
};
