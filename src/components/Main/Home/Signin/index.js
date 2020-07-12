import React, { useContext, useState } from "react";
// Import the icons svg
import { IconAccountCircle } from "../../../../assets/static/icon-accountCircle";
import { IconEmail } from "../../../../assets/static/icon-email";
import { IconPassword } from "../../../../assets/static/icon-password";
import { IconFacebook } from "../../../../assets/static/icon-facebook";
import { IconGoogle } from "../../../../assets/static/icon-google";
// Import the button component
import { Buttons } from "../../../Buttons";
// import AuthContext from "../../../../context/Authentication/authContext";

// Import useEffect So that when the user changes the page it goes to the top
import { Wrap, SectionForm } from "./styles";

export const Signin = (props) => {
  // const authContext = useContext(AuthContext);
  const { registrarUsuario } = authContext;

  let iconUser = (
    <IconAccountCircle width="50px" height="50px" fill="#DE18AD" />
  );
  let iconEmail = <IconEmail width="50px" height="50px" fill="#DE18AD" />;
  let iconPassword = <IconPassword width="50px" height="50px" fill="#DE18AD" />;

  // Condition for responsive icons. Resize for 768px resolution.
  if (screen.width <= 768) {
    iconUser = <IconAccountCircle width="30px" height="30px" fill="#DE18AD" />;
    iconEmail = <IconEmail width="30px" height="30px" fill="#DE18AD" />;
    iconPassword = <IconPassword width="30px" height="30px" fill="#DE18AD" />;
  }

  // State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  // extraer de usuario
  const { nombre, email, password } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    registrarUsuario({
      nombre,
      email,
      password,
    });
  };

  return (
    <Wrap>
      <SectionForm onSubmit={onSubmit}>
        <h2>Registrate</h2>
        <form>
          <div>
            <label htmlFor="nombre">{iconUser}</label>
            <input type="text" id="nombre" name="nombre" placeholder="Nombre" />
          </div>
          <div>
            <label htmlFor="email">{iconEmail}</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Coreo electronico"
            />
          </div>
          <div>
            <label htmlFor="password">{iconPassword}</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          {/* Componente buton. Se envia dos propiedades para su uso */}
          <Buttons value="Registrarse" color="#DE18AD" />
        </form>
        <div>
          <p>O registrate con:</p>
          {/* <IconFacebook />
          <IconGoogle /> */}
        </div>
      </SectionForm>
    </Wrap>
  );
};
