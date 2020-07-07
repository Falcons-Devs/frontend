import React, { useEffect } from "react";
import {
  Container,
  Main,
  Hero,
  Form,
  CancelButton,
  CreateButton,
  SectionForm,
  Wrap,
  Title,
} from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";
import { HeaderImages } from "../../../../HeaderImages";
import { IconEmail } from "../../../../../assets/static/icon-email";
import { IconPassword } from "../../../../../assets/static/icon-password";
import { IconAccountCircle } from "../../../../../assets/static/icon-accountCircle";
import { Link } from "@reach/router";

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
        <Form>
          <SectionForm>
            <form>
              <div>
                <label htmlFor="name">
                  {" "}
                  <IconAccountCircle
                    width="50px"
                    height="50px"
                    fill="#DE18AD"
                  />{" "}
                </label>
                <input type="text" id="name" placeholder="Nombre" />
              </div>
              <div>
                <label htmlFor="email">
                  {" "}
                  <IconEmail width="50px" height="50px" fill="#DE18AD" />{" "}
                </label>
                <input type="text" id="email" placeholder="Coreo electronico" />
              </div>
              <div>
                <label htmlFor="password">
                  {" "}
                  <IconPassword
                    width="50px"
                    height="50px"
                    fill="#DE18AD"
                  />{" "}
                </label>
                <input type="password" id="password" placeholder="Password" />
              </div>
            </form>
            <Title>Crear esteticista</Title>
          </SectionForm>
        </Form>
        <CancelButton>
          <Link to="/admin-beautician">
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
