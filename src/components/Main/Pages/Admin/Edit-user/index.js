import React, { useEffect } from "react";
import {
  Container,
  Main,
  Hero,
  Wrap,
} from "./styles";
import { NameStatus } from "../../../../NameStatus";
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
        
        <AdminForms actionUser="Editar Usuario" type="Usuario" buttonAction="Editar"/>

       
      </Container>
    </Wrap>
  );
};
