import React, { useEffect } from "react";
import { ShowMyProfile } from "../../../../ShowMyProfile";
import { ImagesWithProcess } from "../../../../ImagesWithProcess";
import {
  Wrap,
  Container,
  Profile,
  MyAppointment,
  CreateAppointment,
} from "./styles";

export const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
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
  );
};
