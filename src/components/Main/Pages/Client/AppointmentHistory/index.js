import React, { useEffect } from "react";

// Import the components
import Context from "../../../../../Context";
import { ShowAppointmentHistory } from "../../../../ShowAppointmentHistory";
import { NameStatus } from "../../../../NameStatus";

// Import presentational components of styled components
import { Wrap, Container, Span } from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
export const AppointmentHistory = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Context.Consumer>
      {({ changeType, token }) => {
        changeType("Client");
        return (
          <Wrap>
            <NameStatus title="Mi historial de citas" to={"/client"} />
            <Container>
              <Span></Span>
              {/* Sending the props for the component Show Appointment History  */}
              <ShowAppointmentHistory
                dateTime="01-08-2020"
                estheticianName="Esteticista 1"
                cost="$ 120"
                duration="2 horas"
                process="Descripcion del proceso"
              />
              <ShowAppointmentHistory
                dateTime="06-09-2020"
                estheticianName="Esteticista 3"
                cost="$ 260"
                duration="3 horas"
                process="Descripcion del proceso"
              />
              <ShowAppointmentHistory
                dateTime="03-10-2020"
                estheticianName="Esteticista 2"
                cost="$ 80"
                duration="1 horas"
                process="Descripcion del proceso"
              />
              <ShowAppointmentHistory
                dateTime="02-11-2020"
                estheticianName="Esteticista 4"
                cost="$ 400"
                duration="6 horas"
                process="Descripcion del proceso"
              />
            </Container>
          </Wrap>
        );
      }}
    </Context.Consumer>
  );
};
