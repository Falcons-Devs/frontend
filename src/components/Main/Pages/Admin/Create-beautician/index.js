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
          <NameStatus title="Crear esteticista" to="/admin-beautician" />
        </Main>
        <Hero>
          <HeaderImages numberImg="2" />
        </Hero>
        <AdminForms
          actionUser="Crear Esteticista"
          type="Esteticista"
          buttonAction="Crear"
        />
      </Container>
    </Wrap>
  );
};
