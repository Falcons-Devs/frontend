import React, { useEffect } from "react";
// Import component for show Profile and images with process
import { ShowMyProfile } from "../../../../ShowMyProfile";
import { ImagesWithProcess } from "../../../../ImagesWithProcess";
import Context from "../../../../../Context";

// Import presentational components of styled components
import {
  Wrap,
  Container,
  Profile,
  MyAppointment,
  CreateAppointment,
  H2,
} from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
export const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Context.Consumer>
      {({ changeType }) => {
        changeType("Client");
        return (
          <>
            <H2>Hola [NAME]</H2>
            <Wrap>
              <Container>
                <Profile>
                  {" "}
                  <ShowMyProfile nameUser="Nombre del esteticista" />{" "}
                </Profile>
                <MyAppointment>
                  {" "}
                  <ImagesWithProcess
                    nameImage="1"
                    alt="Mis citas"
                    to="/client-appointments"
                    responsivemobilewidth="40vw"
                    responsivemobileheight="200px"
                  />{" "}
                </MyAppointment>
                <CreateAppointment>
                  <ImagesWithProcess
                    nameImage="5"
                    alt="Crear cita"
                    to="/client-create-appointment"
                    width="100%"
                    height="300px"
                    responsivemobilewidth="40vw"
                    responsivemobileheight="200px"
                  />
                </CreateAppointment>
              </Container>
            </Wrap>
          </>
        );
      }}
    </Context.Consumer>
  );
};
