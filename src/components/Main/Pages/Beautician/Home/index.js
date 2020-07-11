import React, { useEffect } from "react";
import Context from "../../../../../Context";

// Import the components
import { ShowMyProfile } from "../../../../ShowMyProfile";
import { ImagesWithProcess } from "../../../../ImagesWithProcess";

// Import presentational components of styled components
import {
  Wrap,
  Container,
  Profile,
  Agenda,
  Schedule,
  Procedures,
  Title,
} from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
export const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Context.Consumer>
      {({ changeType }) => {
        changeType("Beautician");
        return (
          <Wrap>
            <Title>Hola [NAME]</Title>
            <Container>
              <Profile>
                {" "}
                <ShowMyProfile nameUser="Nombre del usuario" />{" "}
              </Profile>
              <Agenda>
                {/* Show the image component according to the number and add the title at the bottom */}{" "}
                <ImagesWithProcess
                  nameImage="3"
                  alt="Mi agenda"
                  to="/beautician-diary"
                  responsivemobilewidth="140px"
                  responsivemobileheight="280px"
                />{" "}
              </Agenda>
              <Schedule>
                {/* Show the image component according to the number and add the title at the bottom */}
                <ImagesWithProcess
                  nameImage="4"
                  alt="Mis horarios"
                  width="500px"
                  height="300px"
                  to="/beautician-schedule"
                  responsivetablet="160px"
                  responsivemobilewidth="140px"
                  responsivemobileheight="125px"
                />
              </Schedule>
              <Procedures>
                {/* Show the image component according to the number and add the title at the bottom */}
                <ImagesWithProcess
                  nameImage="2"
                  alt="Mis procedimientos"
                  width="500px"
                  height="300px"
                  to="/beautician-procedure"
                  responsivetablet="160px"
                  responsivemobilewidth="140px"
                  responsivemobileheight="125px"
                />
              </Procedures>
            </Container>
          </Wrap>
        );
      }}
    </Context.Consumer>
  );
};
