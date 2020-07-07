import React, { useEffect } from "react";
import { Container, ArrowButton, Wrap, Table } from "./styles";
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
          <NameStatus title="Agenda de [NAME]" to="/admin-beautician" />
        </ArrowButton>
        <Table>
          <ShowSchedule />
        </Table>
      </Container>
    </Wrap>
  );
};
