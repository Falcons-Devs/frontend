import React, { useEffect } from "react";

// Import the icons
import { IconEmail } from "../../assets/static/icon-email";
import { IconPassword } from "../../assets/static/icon-password";
import { IconAccountCircle } from "../../assets/static/icon-accountCircle";
import { IconDescription } from "../../assets/static/icon-description";
import { IconType } from "../../assets/static/icon-type";
import { IconPrice } from "../../assets/static/icon-price";
import { IconDuration } from "../../assets/static/icon-duration";
// Import the component Button
import { Buttons } from "../../components/Buttons";

// Import presentational components of styled components
import {
  Form,
  SectionForm,
  Title,
  CreateButton,
  InputContainer,
} from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
export const AdminForms = ({
  actionUser,
  buttonAction,
  type,
  onClick,
  onChange,
  formValues,
}) => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  // Condition for show form the according the user sender in the props
  let contenido =
    type === "Usuario" ? (
      <InputContainer>
        <div>
          <label htmlFor="name">
            {" "}
            <IconAccountCircle width="50px" height="50px" fill="#DE18AD" />{" "}
          </label>
          <input
            type="text"
            id="name"
            placeholder="Nombre"
            onChange={onChange}
            value={formValues.name}
          />
        </div>
        <div>
          <label htmlFor="email">
            {" "}
            <IconEmail width="50px" height="50px" fill="#DE18AD" />{" "}
          </label>
          <input
            type="text"
            id="email"
            placeholder="Coreo electronico"
            onChange={onChange}
            value={formValues.email}
          />
        </div>
        <div>
          <label htmlFor="password">
            {" "}
            <IconPassword width="50px" height="50px" fill="#DE18AD" />{" "}
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={onChange}
            value={formValues.password}
          />
        </div>
        <div>
          <label htmlFor="type">
            {" "}
            <IconType width="50px" height="50px" fill="#DE18AD" />{" "}
          </label>
          <select
            name="type"
            id="type"
            onChange={onChange}
            value={formValues.type}
          >
            <option value="">Elige una opción</option>
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
          <input
            type="text"
            id="name"
            placeholder="Nombre"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="name">
            {" "}
            <IconDescription width="50px" height="50px" fill="#DE18AD" />{" "}
          </label>
          <input
            type="text"
            id="description"
            placeholder="Descripción"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="price">
            {" "}
            <IconPrice width="50px" height="50px" fill="#DE18AD" />{" "}
          </label>
          <input
            type="number"
            id="price"
            placeholder="Price"
            onChange={onChange}
            min="1"
          />
        </div>
        <div>
          <label htmlFor="duration">
            {" "}
            <IconDuration width="50px" height="50px" fill="#DE18AD" />{" "}
          </label>
          <input
            type="number"
            id="duration"
            placeholder="Duracion (horas)"
            onChange={onChange}
            min="1"
          />
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
          <input
            type="text"
            id="name"
            placeholder="Nombre"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="email">
            {" "}
            <IconEmail width="50px" height="50px" fill="#DE18AD" />{" "}
          </label>
          <input
            type="text"
            id="email"
            placeholder="Coreo electronico"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="password">
            {" "}
            <IconPassword width="50px" height="50px" fill="#DE18AD" />{" "}
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={onChange}
          />
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
          <Buttons color="#2DD881" value={buttonAction} onClick={onClick} />
        </CreateButton>
      </SectionForm>
    </Form>
  );
};
