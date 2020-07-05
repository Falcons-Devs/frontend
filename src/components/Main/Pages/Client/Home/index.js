import React from "react";
import { Container, Profile, MyAppointment, CreateAppointment } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Profile>
        <h1>Perfil</h1>
      </Profile>
      <MyAppointment>
        <h1>Mis citas</h1>
      </MyAppointment>
      <CreateAppointment>
        <h1>Crear Cita</h1>
      </CreateAppointment>
    </Container>
  );
};
