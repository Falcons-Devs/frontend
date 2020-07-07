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
import { IconType } from "../../../../../assets/static/icon-type";

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
              <div>
                <label htmlFor="type">
                  {" "}
                  <IconType width="50px" height="50px" fill="#DE18AD" />{" "}
                </label>
                <select name="type" id="type">
                  <option value="admin">Administrador</option>
                  <option value="beautician">Esteticista</option>
                  <option value="client">Cliente</option>
                </select>
              </div>
            </form>
            <Title>Editar usuario</Title>
          </SectionForm>
        </Form>
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
