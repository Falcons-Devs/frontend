import React, { useState } from "react";
import { Link, Redirect } from "@reach/router";
import Swal from "sweetalert2";
import Axios from "axios";

// Import the icons svg
import { IconEmail } from "../../../../assets/static/icon-email";
import { IconPassword } from "../../../../assets/static/icon-password";
// Import the button component
import { Buttons } from "../../../Buttons";

// Import useEffect So that when the user changes the page it goes to the top
import { Wrap, SectionForm } from "./styles";
import Context from "../../../../Context";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState();
  let iconEmail = <IconEmail width="50px" height="50px" fill="#DE18AD" />;
  let iconPassword = <IconPassword width="50px" height="50px" fill="#DE18AD" />;

  // Condition for responsive icons. Resize for 768px resolution.
  if (screen.width <= 768) {
    iconEmail = <IconEmail width="30px" height="30px" fill="#DE18AD" />;
    iconPassword = <IconPassword width="30px" height="30px" fill="#DE18AD" />;
  }

  return (
    <Context.Consumer>
      {({ changeToken, token }) => {
        const auth = async (e) => {
          e.preventDefault();
          try {
            const result = await Axios.post(
              "http://104.198.182.133/auth/login",
              {
                email: email,
                password: password,
              }
            );
            changeToken(result.data.body);
          } catch (error) {
            return Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "¡Datos incorrectos!",
              footer: "<h3>One Click Style</h3>",
            });
          }
          let user;
          const admins = await Axios.get("http://104.198.182.133/admin");
          for (const key in admins.data.body) {
            if (admins.data.body[key].email === email) {
              localStorage.setItem("userId", admins.data.body[key].id);
              user = "Admin";
            }
          }
          if (!user) {
            const client = await Axios.get("http://104.198.182.133/user");
            for (const key in client.data.body) {
              if (client.data.body[key].email === email) {
                localStorage.setItem("userId", client.data.body[key].id);
                user = "Client";
              }
            }
          }

          if (user === "Admin") {
            setRedirect("/admin");
            Swal.fire({
              icon: "success",
              title: "Inicio de sesión exitoso",
              showConfirmButton: false,
              timer: 3000,
            });
          }
          if (user === "Client") {
            setRedirect("/client");
            Swal.fire({
              icon: "success",
              title: "Inicio de sesión exitoso",
              showConfirmButton: false,
              timer: 3000,
            });
          }
        };
        if (redirect) return <Redirect to={redirect} />;
        return (
          <Wrap>
            <SectionForm>
              <h2>Iniciar sesión</h2>
              <form>
                <div>
                  <label htmlFor="email"> {iconEmail} </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Correo electronico"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password">{iconPassword}</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* Componente buton. Se envia dos propiedades para su uso */}
                <Buttons
                  value="Iniciar sesión"
                  color="#DE18AD"
                  onClick={(e) => auth(e)}
                />
              </form>
              <div>
                <p>
                  ¿Cliente nuevo? <Link to="/signin">Registrate aquí</Link>
                </p>
              </div>
            </SectionForm>
          </Wrap>
        );
      }}
    </Context.Consumer>
  );
};
