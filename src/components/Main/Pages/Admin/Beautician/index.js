import React, { useEffect } from "react";
import { Wrap, Container, ArrowButton, Title } from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";
import { CardBeautician } from "../../../../CardBeautician";

export const Beautician = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Title>
        <NameStatus title="Esteticistas" to={"/admin"} />
        <Buttons value="Crear esteticista" color="#2DD881" />
      </Title>
      <Container>
        <ArrowButton></ArrowButton>
        <CardBeautician
          estheticianName="Esteticista 1"
          email="correo@correo.com"
          schedule="15:00 - 21:00"
        />
        <CardBeautician
          estheticianName="Esteticista 2"
          email="correo@correo.com"
          schedule="8:00 - 14:00"
        />
        <CardBeautician
          estheticianName="Esteticista 3"
          email="correo@correo.com"
          schedule="15:00 - 21:00"
        />
        <CardBeautician
          estheticianName="Esteticista 4"
          email="correo@correo.com"
          schedule="8:00 - 14:00"
        />
      </Container>
    </Wrap>
  );
};
