import React, { useEffect } from "react";

// Import the components
import { NameStatus } from "../../../../NameStatus";
import { HeaderImages } from "../../../../HeaderImages";
import { Buttons } from "../../../../Buttons";
import { AdminForms } from "../../../../AdminForms";

// Import the icons svg
import { IconAccountCircle } from "../../../../../assets/static/icon-accountCircle";
import { IconPrice } from "../../../../../assets/static/icon-price";
import { IconDuration } from "../../../../../assets/static/icon-duration";

// Import the Navigation Link
import { Link } from "@reach/router";

// Import presentational components of styled components
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

// Import useEffect So that when the user changes the page it goes to the top
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
