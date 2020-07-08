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
          
        <AdminForms />
        
        <CancelButton>
          <Link to="/admin-users">
            <Buttons color="#DE3C48" value="Cancelar" />
          </Link>
        </CancelButton>
        <CreateButton>
          <Buttons color="#2DD881" value="Confirmar" />
        </CreateButton>
      </Container>
    </Wrap>
  );
};
