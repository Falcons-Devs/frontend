import React, { useEffect, useState } from "react";
import Axios from "axios";

// Import component for show Profile and images with process
import { ShowMyProfile } from "../../../../ShowMyProfile";
import { ImagesWithProcess } from "../../../../ImagesWithProcess";
import Context from "../../../../../Context";
import { Loader } from "../../../../Loader";

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
  const [client, setClient] = useState("");
  const [data, setData] = useState(false);
  useEffect(() => {
    window.scroll(0, 0);
  });
  const getUser = async (userId) => {
    const result = await Axios.get(`http://104.198.182.133/user/"${userId}"`);
    setClient(result.data.body[0]);
    setData(true);
  };
  return (
    <Context.Consumer>
      {({ changeType, userId }) => {
        if (data === false) getUser(userId);
        changeType("Client");
        if (!client) return <Loader />;
        return (
          <>
            <H2>Hola {client.name}</H2>
            <Wrap>
              <Container>
                <Profile>
                  {" "}
                  <ShowMyProfile
                    nameUser={client.name}
                    nameBeautician="Nombre Esteticista"
                  />{" "}
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
                    responsivetablet="368px"
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
