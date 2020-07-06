import React, { useEffect } from "react";
import {
  Container,
  ArrowButton,
  CreateButton,
  Beautician as BeauticianContainer,
} from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";

export const Beautician = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Container>
      <ArrowButton>
        <NameStatus title="Esteticistas" to={"/admin"} />
      </ArrowButton>
      <CreateButton>
        <Buttons value="Crear esteticista" color="#2DD881" />
      </CreateButton>
      <BeauticianContainer>
        <h1>Esteticistas</h1>
      </BeauticianContainer>
    </Container>
  );
};
