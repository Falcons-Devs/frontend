import React, { useEffect } from "react";

// Import the components
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";
import { CardPerson } from "../../../../CardPerson";

// Import the icons svg
import { IconAdd } from "../../../../../assets/static/icon-add";

// Import the Navigation Link
import { Link } from "@reach/router";

// Import presentational components of styled components
import { Wrap, Container, ArrowButton, Title } from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
export const Beautician = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      {/* Title creation, creation button and redirection arrow */}
      <Title>
        <NameStatus title="Esteticistas" to={"/admin"} />
        <Link to="/admin-create-beautician">
          {screen.width <= 375 ? (
            <IconAdd width="35px" height="35px" fill="#2DD881" />
          ) : (
            <Buttons
              value="Crear esteticista"
              responsivetablet
              color="#2DD881"
            />
          )}
        </Link>
      </Title>
      {/* Creation of cards to present information to beauticians */}
      <Container>
        <ArrowButton></ArrowButton>
        <CardPerson
          name="Esteticista 1"
          email="correo@correo.com"
          schedule="15:00 - 21:00"
          to="/admin-beautician-diary"
        />
        <CardPerson
          name="Esteticista 2"
          email="correo@correo.com"
          schedule="8:00 - 14:00"
          to="/admin-beautician-diary"
        />
        <CardPerson
          name="Esteticista 3"
          email="correo@correo.com"
          schedule="15:00 - 21:00"
          to="/admin-beautician-diary"
        />
        <CardPerson
          name="Esteticista 4"
          email="correo@correo.com"
          schedule="8:00 - 14:00"
          to="/admin-beautician-diary"
        />
      </Container>
    </Wrap>
  );
};
