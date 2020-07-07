import React, { useEffect } from "react";
import { Container, ArrowButton, Dairy, Wrap } from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { Schedule as ShowSchedule } from "../../../../Schedule";

export const Diary = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Container>
        <ArrowButton>
          <NameStatus title="Ver agenda" to={"/beautician"} />
        </ArrowButton>
        <Dairy>
          <ShowSchedule />
        </Dairy>
      </Container>
    </Wrap>
  );
};
