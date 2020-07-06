import React from "react";
import { Container, Clients, Beautician, Procedures, Users } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Clients>
        <h1>Clientes</h1>
      </Clients>
      <Beautician>
        <h1>Esteticistas</h1>
      </Beautician>
      <Procedures>
        <h1>Procedimientos</h1>
      </Procedures>
      <Users>
        <h1>Usuarios</h1>
      </Users>
    </Container>
  );
};
