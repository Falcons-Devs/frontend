import React, { useEffect } from "react";

import { IconEmail } from "../../assets/static/icon-email";
import { IconPassword } from "../../assets/static/icon-password";
import { IconAccountCircle } from "../../assets/static/icon-accountCircle";
import { IconType } from "../../assets/static/icon-type";
import { Buttons } from "../../components/Buttons";
import { IconPrice } from "../../assets/static/icon-price";
import { IconDuration } from "../../assets/static/icon-duration";
import {
  Form,
  SectionForm,
  Title,
  CancelButton,
  CreateButton,
  InputContainer,
} from "./styles";

export const AdminForms = ({ actionUser, buttonAction, type }) => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  let contenido =
    type === "Usuario" ? (
      <InputContainer>
        <div>
          <label htmlFor="name">
            {" "}
            <IconAccountCircle width="50px" height="50px" fill="#DE18AD" />{" "}
          </label>
          <input type="text" id="name" placeholder="Nombre" />
        </div>
        <div>
          <label htmlFor="email">
            {" "}
            <IconEmail width="50px" height="50px" fill="#DE18AD" />{" "}
          </label>
          <input type="text" id="email" placeholder="Coreo electronico" />
        </div>
        <div>
          <label htmlFor="password">
            {" "}
            <IconPassword width="50px" height="50px" fill="#DE18AD" />{" "}
          </label>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <div>
          <label htmlFor="type">
            {" "}
            <IconType width="50px" height="50px" fill="#DE18AD" />{" "}
          </label>
          <select name="type" id="type">
            <option value="admin">Administrador</option>
            <option value="beautician">Esteticista</option>
            <option value="client">Cliente</option>
          </select>
        </div>
      </InputContainer>
    ) : (
      <InputContainer>
        <div>
          <label htmlFor="name">
            {" "}
            <IconAccountCircle width="50px" height="50px" fill="#DE18AD" />{" "}
          </label>
          <input type="text" id="name" placeholder="Nombre" />
        </div>
        <div>
          <label htmlFor="price">
            {" "}
            <IconPrice width="50px" height="50px" fill="#DE18AD" />{" "}
          </label>
          <input type="number" id="price" placeholder="Price" />
        </div>
        <div>
          <label htmlFor="duration">
            {" "}
            <IconDuration width="50px" height="50px" fill="#DE18AD" />{" "}
          </label>
          <input type="number" id="duration" placeholder="Duracion (horas)" />
        </div>
      </InputContainer>
    );
  if (type === "Esteticista") {
    contenido = (
      <InputContainer>
        <div>
          <label htmlFor="name">
            {" "}
            <IconAccountCircle width="50px" height="50px" fill="#DE18AD" />{" "}
          </label>
          <input type="text" id="name" placeholder="Nombre" />
        </div>
        <div>
          <label htmlFor="email">
            {" "}
            <IconEmail width="50px" height="50px" fill="#DE18AD" />{" "}
          </label>
          <input type="text" id="email" placeholder="Coreo electronico" />
        </div>
        <div>
          <label htmlFor="password">
            {" "}
            <IconPassword width="50px" height="50px" fill="#DE18AD" />{" "}
          </label>
          <input type="password" id="password" placeholder="Password" />
        </div>
      </InputContainer>
    );
  }

  return (
    <Form>
      <SectionForm>
        {contenido}
        <Title> {actionUser}</Title>
        <CreateButton>
          <Buttons color="#2DD881" value={buttonAction} />
        </CreateButton>
        <CancelButton>
          <Buttons color="#DE3C48" value="Cancelar" />
        </CancelButton>
      </SectionForm>
    </Form>
  );
};
