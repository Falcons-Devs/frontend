import React from "react";
import Facebook from "../../../../apk/Facebook";
import Google from "../../../../apk/Google";
import { IconEmail } from '../../../../assets/static/icon-email';
import { IconPassword } from '../../../../assets/static/icon-password';

import { Wrap, SectionForm } from './styles';
import { Link } from "@reach/router";

export const Login = () => {
  return (
    <Wrap>
        <SectionForm>
            <h2>Iniciar sesión</h2>
            <form >
                <div>
                    <label htmlFor="email"> <IconEmail width="50px" height="50px" fill="#DE18AD" /> </label>
                    <input type="text" id="email" placeholder="Coreo electronico"/>
                </div>
                <div>
                    <label htmlFor="password"> <IconPassword width="50px" height="50px" fill="#DE18AD" /> </label>
                    <input type="text" id="password" placeholder="Password"/>
                </div>
                <button>Iniciar sesión</button>
            </form>
            <div>
                <p>Cliente nuevo? <Link to="/signin">Resgistrate aquí</Link></p>
            </div>
        </SectionForm>
    </Wrap>
)
}
