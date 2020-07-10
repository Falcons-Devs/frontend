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

import { Link } from "@reach/router";


export const CreateUser = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Container>
        <Main>
          <NameStatus title="Crear usuario" to="/admin-users" />
        </Main>
        <Hero>
          <HeaderImages numberImg="4" />
        </Hero>
          
        <AdminForms actionUser="Crear Usuario" type="Usuario" buttonAction="Crear"/>
      
      </Container>
    </Wrap>
  );
};
