import React, { useEffect } from "react";
import Axios from "axios";

// Import the components
import { NameStatus } from "../../../../NameStatus";
import { HeaderImages } from "../../../../HeaderImages";
import { AdminForms } from "../../../../AdminForms";

// Import the Navigation Link
import { Link } from "@reach/router";

// Import presentational components of styled components
import { Container, Main, Hero, Wrap } from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
export const CreateUser = () => {
  useEffect(() => {
    window.scroll(0, 0);
    const fetchData = async () => {
      // const result = await Axios.post("http://104.198.182.133/api/user", {
      //   email: "hectormr@gmail.com",
      //   name: "hectormr",
      //   password: "2626",
      // });
      // console.log(result.status);
    };
    fetchData();
  });
  return (
    <Wrap>
      <Container>
        <Main>
          {/* Title creation and redirection arrow */}
          <NameStatus title="Crear usuario" to="/admin-users" />
        </Main>
        <Hero>
          {/* Show image component according to number */}
          <HeaderImages numberImg="4" />
        </Hero>
        {/* Form creation */}
        <AdminForms
          actionUser="Crear Usuario"
          type="Usuario"
          buttonAction="Crear"
        />
      </Container>
    </Wrap>
  );
};
