import React from "react";

import { IconEmail } from "../../assets/static/icon-email";
import { IconPassword } from "../../assets/static/icon-password";
import { IconAccountCircle } from "../../assets/static/icon-accountCircle";
import { IconType } from "../../assets/static/icon-type";
import { Form, SectionForm, Title } from "./styles";

export const AdminForms = () => {
    return (
        <Form>
        <SectionForm>
          <form>
            <div>
              <label htmlFor="name">
                {" "}
                <IconAccountCircle
                  width="50px"
                  height="50px"
                  fill="#DE18AD"
                />{" "}
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
                <IconPassword
                  width="50px"
                  height="50px"
                  fill="#DE18AD"
                />{" "}
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
          </form>

          <Title>Crear usuario</Title>
          </SectionForm>
          </Form>
    );

};