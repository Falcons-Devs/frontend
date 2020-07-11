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
  Title,
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
          <>
            <Title>Hola [NAME]</Title>
            <Wrap>
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
                    responsivetablet="true"
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
                    responsivetablet="true"
                  />
                </Procedures>
              </Container>
            </Wrap>
          </>
        );
      }}
    </Context.Consumer>
  );
};
