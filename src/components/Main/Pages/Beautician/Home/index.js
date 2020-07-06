import React from "react";
import { ShowMyProfile } from "../../../../ShowMyProfile";
import { ImagesWithProcess } from "../../../../ImagesWithProcess";

import {
  Wrap,
  Container,
  Profile,
  Agenda,
  Schedule,
  Procedures,
} from "./styles";

export const Home = () => {
  return (
    <Wrap>
      <Container>
        <Profile>
          {" "}
          <ShowMyProfile nameUser="Nombre del usuario" />{" "}
        </Profile>
        <Agenda>
          {" "}
          <ImagesWithProcess nameImage="3" alt="Mi agenda" />{" "}
        </Agenda>
        <Schedule>
          <ImagesWithProcess
            nameImage="4"
            alt="Mis horarios"
            width="500px"
            height="300px"
          />
        </Schedule>
        <Procedures>
          <ImagesWithProcess
            nameImage="2"
            alt="Mis procedimientos"
            width="500px"
            height="300px"
          />
        </Procedures>
      </Container>
    </Wrap>
  );
};
