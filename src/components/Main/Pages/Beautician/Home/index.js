import React, { useEffect } from "react";
import { ShowMyProfile } from "../../../../ShowMyProfile";
import { ImagesWithProcess } from "../../../../ImagesWithProcess";
import Context from "../../../../../Context";
import {
  Wrap,
  Container,
  Profile,
  Agenda,
  Schedule,
  Procedures,
} from "./styles";

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
            <Container>
              <Profile>
                {" "}
                <ShowMyProfile nameUser="Nombre del usuario" />{" "}
              </Profile>
              <Agenda>
                {" "}
                <ImagesWithProcess
                  nameImage="3"
                  alt="Mi agenda"
                  to="/beautician-diary"
                />{" "}
              </Agenda>
              <Schedule>
                <ImagesWithProcess
                  nameImage="4"
                  alt="Mis horarios"
                  width="500px"
                  height="300px"
                  to="/beautician-schedule"
                />
              </Schedule>
              <Procedures>
                <ImagesWithProcess
                  nameImage="2"
                  alt="Mis procedimientos"
                  width="500px"
                  height="300px"
                  to="/beautician-procedure"
                />
              </Procedures>
            </Container>
          </Wrap>
        );
      }}
    </Context.Consumer>
  );
};
