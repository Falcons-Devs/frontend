import React from "react";
import { IconAccountCircle } from "../../../../assets/static/icon-accountCircle";
import { IconEmail } from "../../../../assets/static/icon-email";
import { IconPassword } from "../../../../assets/static/icon-password";
import { IconFacebook } from "../../../../assets/static/icon-facebook";
import { IconGoogle } from "../../../../assets/static/icon-google";
import { Wrap, SectionForm } from "./styles";
import { Buttons } from "../../../Buttons";

export const Signin = () => {
  return (
    <Wrap>
      <SectionForm>
        <h2>Registrate</h2>
        <form>
          <div>
            <label htmlFor="nombre">
              <IconAccountCircle width="50px" height="50px" fill="#DE18AD" />
            </label>
            <input type="text" id="nombre" placeholder="Nombre" />
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
            <input type="text" id="password" placeholder="Password" />
          </div>
          <Buttons value="Registrarse" />
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
