import React, { useEffect } from "react";

// Import the components
import Context from "../../../../../Context";
import { NameStatus } from "../../../../NameStatus";
import { Schedule as ShowSchedule } from "../../../../Schedule";
import { MobileDiary } from "../../../../MobileDiary";

// Import presentational components of styled components
import { Container, ArrowButton, Dairy, Wrap } from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
export const Diary = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Context.Consumer>
      {({ changeType, token }) => {
        changeType("Beautician");
        return (
          <Wrap>
            <Container>
              <ArrowButton>
                {/* Title creation, creation button and redirection arrow */}
                <NameStatus title="Ver agenda" to={"/beautician"} />
              </ArrowButton>
              {/* Show agenda component */}
              <Dairy>
                {screen.width <= 375 ? (
                  <>
                    <MobileDiary
                      datetime="01-08-2020"
                      time="6 horas"
                      client="Manolo Fernandez"
                    />
                    <MobileDiary
                      datetime="03-08-2020"
                      time="3 horas"
                      client="Manolo Fernandez"
                    />
                  </>
                ) : (
                  <ShowSchedule />
                )}
              </Dairy>
            </Container>
          </Wrap>
        );
      }}
    </Context.Consumer>
  );
};
