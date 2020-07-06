import React, { useEffect } from "react";
import {
  Container,
  ArrowButton,
  Title,
  Hero,
  Form,
  CancelButton,
  EditButton,
} from "./styles";

export const EditUser = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Container>
      <ArrowButton>
        <h1>Flecha</h1>
      </ArrowButton>
      <Title>
        <h1>Titulo</h1>
      </Title>
      <Hero>
        <h1>Hero</h1>
      </Hero>
      <Form>
        <h1>Form</h1>
      </Form>
      <CancelButton>
        <h1>Cancelar</h1>
      </CancelButton>
      <EditButton>
        <h1>Editar</h1>
      </EditButton>
    </Container>
  );
};
