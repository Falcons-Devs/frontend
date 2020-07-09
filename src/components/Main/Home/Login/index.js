import React from "react";
import { Link } from "@reach/router";
import Facebook from "../../../../apk/Facebook";
import Google from "../../../../apk/Google";
import { IconEmail } from "../../../../assets/static/icon-email";
import { IconPassword } from "../../../../assets/static/icon-password";
import { Buttons } from "../../../Buttons";

import { Wrap, SectionForm } from "./styles";

export const Login = () => {
  let iconEmail = <IconEmail width="50px" height="50px" fill="#DE18AD" />;
  let iconPassword = <IconPassword width="50px" height="50px" fill="#DE18AD" />;

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
