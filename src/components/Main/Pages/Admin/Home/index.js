import React, { useEffect } from "react";

// Import the components
import Context from "../../../../../Context";
import { ImagesWithProcess } from "../../../../ImagesWithProcess";

// Import presentational components of styled components
import {
  Wrap,
  Container,
  Clients,
  Beautician,
  Procedures,
  Users,
} from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
export const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Context.Consumer>
      {({ changeType, token }) => {
        {
          /* console.log(token); */
        }
        changeType("Admin");
        return (
          <Wrap>
            <Container>
              {/* Show image components according to the number and adding the title below */}
              <Clients>
                {" "}
                <ImagesWithProcess
                  nameImage="1"
                  alt="Clientes"
                  to="/admin-clients"
                  height="500px"
                  responsivemobilewidth="85vw"
                  responsivemobileheight="150px"
                />{" "}
              </Clients>
              <Beautician>
                {" "}
                <ImagesWithProcess
                  nameImage="2"
                  alt="Esteticistas"
                  to="/admin-beautician"
                  height="250px"
                  responsivetablet="500px"
                  responsivemobilewidth="85vw"
                  responsivemobileheight="150px"
                />{" "}
              </Beautician>
              <Procedures>
                {" "}
                <ImagesWithProcess
                  nameImage="4"
                  alt="Procedimientos"
                  to="/admin-procedures"
                  height="250px"
                  responsivetablet="500px"
                  responsivemobilewidth="85vw"
                  responsivemobileheight="150px"
                />{" "}
              </Procedures>
              <Users>
                {" "}
                <ImagesWithProcess
                  nameImage="3"
                  alt="Usuarios"
                  to="/admin-users"
                  height="500px"
                  responsivetablet
                  responsivemobilewidth="85vw"
                  responsivemobileheight="150px"
                />{" "}
              </Users>
            </Container>
          </Wrap>
        );
      }}
    </Context.Consumer>
  );
};
