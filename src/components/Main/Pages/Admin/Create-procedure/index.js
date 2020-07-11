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
import { IconPrice } from "../../../../../assets/static/icon-price";
import { IconDuration } from "../../../../../assets/static/icon-duration";
import { AdminForms } from "../../../../AdminForms";
import { Link } from "@reach/router";

export const CreateProcedure = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Container>
        <Main>
          {/* Title creation and redirection arrow */}
          <NameStatus title="Crear procedimiento" to="/admin-procedures" />
        </Main>
        <Hero>
          {/* Show image component according to number */}
          <HeaderImages numberImg="1" />
        </Hero>
        {/* Form creation */}
        <AdminForms actionUser="Crear Procedimiento" buttonAction="Crear" />
      </Container>
    </Wrap>
  );
};
