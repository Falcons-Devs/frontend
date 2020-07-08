import React, { useEffect } from "react";
import {
  Container,
  Main,
  Hero,
  CancelButton,
  CreateButton,
  Wrap,
} from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";
import { HeaderImages } from "../../../../HeaderImages";
import { AdminForms } from "../../../../AdminForms";

export const EditUser = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Container>
        <Main>
          <NameStatus title="Editar usuario" to="/admin-users" />
        </Main>
        <Hero>
          <HeaderImages numberImg="4" />
        </Hero>
        
        <AdminForms />

        <CancelButton>
          <Buttons color="#DE3C48" value="Cancelar" />
        </CancelButton>
        <CreateButton>
          <Buttons color="#2DD881" value="Editar" />
        </CreateButton>
      </Container>
    </Wrap>
  );
};
