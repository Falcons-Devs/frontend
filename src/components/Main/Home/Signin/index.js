import React, { useState } from "react";
import Axios from "axios";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email,
      name,
      password,
    };
    try {
      const result = await Axios.post("http://104.198.182.133/user", body);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrap>
      <SectionForm>
        <h2>Registrate</h2>
        <form>
          <div>
            <label htmlFor="nombre">{iconUser}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">{iconEmail}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo electronico"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">{iconPassword}</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Componente buton. Se envia dos propiedades para su uso */}
          <Buttons
            value="Registrarse"
            color="#DE18AD"
            onClick={(e) => onSubmit(e)}
          />
        </form>
        <div>
          <p>O registrate con:</p>
          <IconFacebook />
          <IconGoogle />
        </div>
      </SectionForm>
    </Wrap>
  );
};
