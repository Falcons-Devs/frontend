import React, { useEffect } from "react";
import {
  Wrap,
  Container,
  Clients,
  Beautician,
  Procedures,
  Users,
} from "./styles";
import Context from "../../../../../Context";

import { ImagesWithProcess } from "../../../../ImagesWithProcess";

export const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Context.Consumer>
      {({ changeType }) => {
        changeType("Admin");
        return (
          <Wrap>
            <Container>
              <Clients>
                {" "}
                <ImagesWithProcess
                  nameImage="1"
                  alt="Clientes"
                  to="/admin-clients"
                  height="500px"
                />{" "}
              </Clients>
              <Beautician>
                {" "}
                <ImagesWithProcess
                  nameImage="2"
                  alt="Esteticistas"
                  to="/admin-beautician"
                  height="250px"
                />{" "}
              </Beautician>
              <Procedures>
                {" "}
                <ImagesWithProcess
                  nameImage="4"
                  alt="Procedimientos"
                  to="/admin-procedures"
                  height="250px"
                />{" "}
              </Procedures>
              <Users>
                {" "}
                <ImagesWithProcess
                  nameImage="3"
                  alt="Usuarios"
                  to="/admin-users"
                  height="500px"
                />{" "}
              </Users>
            </Container>
          </Wrap>
        );
      }}
    </Context.Consumer>
  );
};
