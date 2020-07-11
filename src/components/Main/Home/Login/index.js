import React from "react";
import { Link } from "@reach/router";
import Facebook from "../../../../apk/Facebook";
import Google from "../../../../apk/Google";
// Import the icons svg
import { IconEmail } from "../../../../assets/static/icon-email";
import { IconPassword } from "../../../../assets/static/icon-password";
// Import the button component
import { Buttons } from "../../../Buttons";

// Import useEffect So that when the user changes the page it goes to the top
import { Wrap, SectionForm } from "./styles";

export const Login = () => {
  let iconEmail = <IconEmail width="50px" height="50px" fill="#DE18AD" />;
  let iconPassword = <IconPassword width="50px" height="50px" fill="#DE18AD" />;

  // Condition for responsive icons. Resize for 768px resolution.
  if (screen.width <= 768) {
    iconEmail = <IconEmail width="30px" height="30px" fill="#DE18AD" />;
    iconPassword = <IconPassword width="30px" height="30px" fill="#DE18AD" />;
  }

  return (
    <Wrap>
      <SectionForm>
        <h2>Iniciar sesión</h2>
        <form>
          <div>
            <label htmlFor="email"> {iconEmail} </label>
            <input type="text" id="email" placeholder="Coreo electronico" />
          </div>
          <div>
            <label htmlFor="password">{iconPassword}</label>
            <input type="text" id="password" placeholder="Password" />
          </div>
          {/* Componente buton. Se envia dos propiedades para su uso */}
          <Buttons value="Iniciar sesión" color="#DE18AD" />
        </form>
        <div>
          <p>
            ¿Cliente nuevo? <Link to="/signin">Registrate aquí</Link>
          </p>
        </div>
      </SectionForm>
    </Wrap>
  );
};
