import React, { useEffect } from "react";
import { Container, ArrowButton, Wrap, Table } from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { Schedule as ShowSchedule } from "../../../../Schedule";
import { MobileDiary } from "../../../../MobileDiary";

export const Diary = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Container>
        <ArrowButton>
          {/* Title creation and redirection arrow */}
          <NameStatus title="Agenda de [NAME]" to="/admin-beautician" />
        </ArrowButton>
        {/* Creating the customer table */}
        <Table>
          {screen.width <= 375 ? (
            <>
              <MobileDiary
                datetime="01/08/2020"
                time="5 horas"
                client="Manolo Fernandez"
              />
              <MobileDiary
                datetime="03/08/2020"
                time="3 horas"
                client="Manolo Fernandez"
              />
            </>
          ) : (
            <ShowSchedule />
          )}
        </Table>
      </Container>
    </Wrap>
  );
};
