import React from "react";
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
  return (
    <Wrap>
      <Container>
        <Profile>
          {" "}
          <ShowMyProfile nameUser="Nombre del esteticista" />{" "}
        </Profile>
        <MyAppointment>
          {" "}
          <ImagesWithProcess nameImage="1" alt="Mis citas" />{" "}
        </MyAppointment>
        <CreateAppointment>
          <ImagesWithProcess
            nameImage="5"
            alt="Crear cita"
            width="1200px"
            height="300px"
          />
        </CreateAppointment>
      </Container>
    </Wrap>
  );
};
