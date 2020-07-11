import React, { useEffect } from "react";
// Import component for show Profile and images with process
import { ShowMyProfile } from "../../../../ShowMyProfile";
import { ImagesWithProcess } from "../../../../ImagesWithProcess";
import Context from "../../../../../Context";

// Import useEffect So that when the user changes the page it goes to the top
import {
  Wrap,
  Container,
  Profile,
  MyAppointment,
  CreateAppointment,
  H2,
} from "./styles";

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
                  />{" "}
                </MyAppointment>
                <CreateAppointment>
                  <ImagesWithProcess
                    nameImage="5"
                    alt="Crear cita"
                    width="1200px"
                    height="300px"
                    to="/client-create-appointment"
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
