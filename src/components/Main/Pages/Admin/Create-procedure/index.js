import React, { useEffect } from "react";
import {
  Container,
  Main,
  Hero,
  Form,
  CancelButton,
  ConfirmButton,
  Wrap,
  SectionForm,
  Title,
} from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { HeaderImages } from "../../../../HeaderImages";
import { Buttons } from "../../../../Buttons";
import { IconAccountCircle } from "../../../../../assets/static/icon-accountCircle";
import { IconPassword } from "../../../../../assets/static/icon-password";
import { IconEmail } from "../../../../../assets/static/icon-email";
import { IconPrice } from "../../../../../assets/static/icon-price";
import { IconDuration } from "../../../../../assets/static/icon-duration";

export const CreateProcedure = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Container>
        <Main>
          <NameStatus title="Crear procedimiento" to="/admin-procedures" />
        </Main>
        <Hero>
          <HeaderImages numberImg="1" />
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
                <label htmlFor="price">
                  {" "}
                  <IconPrice width="50px" height="50px" fill="#DE18AD" />{" "}
                </label>
                <input type="number" id="price" placeholder="Price" />
              </div>
              <div>
                <label htmlFor="duration">
                  {" "}
                  <IconDuration
                    width="50px"
                    height="50px"
                    fill="#DE18AD"
                  />{" "}
                </label>
                <input
                  type="number"
                  id="duration"
                  placeholder="Duracion (horas)"
                />
              </div>
            </form>
            <Title>Crear Procedimiento</Title>
          </SectionForm>
        </Form>
        <CancelButton>
          <Buttons color="#DE3C48" value="Cancelar" />
        </CancelButton>
        <ConfirmButton>
          <Buttons color="#2DD881" value="Confirmar" />
        </ConfirmButton>
      </Container>
    </Wrap>
  );
};
