import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Loader } from "../../../../Loader";

// Import the components
import { NameStatus } from "../../../../NameStatus";
import { HeaderImages } from "../../../../HeaderImages";
import { Buttons } from "../../../../Buttons";

import { IconEmail } from "../../../../../assets/static/icon-email";
import { IconPassword } from "../../../../../assets/static/icon-password";
import { IconAccountCircle } from "../../../../../assets/static/icon-accountCircle";

// Import presentational components of styled components
import {
  Container,
  Main,
  Hero,
  Wrap,
  CancelButton,
  CreateButton,
  Form,
  InputContainer,
  SectionForm,
  Title,
} from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
export const EditUser = ({ userId }) => {
  const [data, setData] = useState(false);
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    window.scroll(0, 0);
    const fetchData = async () => {
      const result = await Axios.get(`http://104.198.182.133/user/"${userId}"`);
      if (result.data.body.length === 0) {
        const admins = await Axios.get(
          `http://104.198.182.133/admin/"${userId}"`
        );
        setUser(admins.data.body);
      } else {
        setUser(result.data.body);
      }
      setName(user[0].name);
      setEmail(user[0].email);
      setPassword("123456");
      setData(true);
    };
    if (data === false) fetchData();
  });
  const editUser = async () => {
    // TODO: Create function of PUT
    console.log(name);
    console.log(email);
    console.log(password);
    // const result = await Axios.post("http://104.198.182.133/user");
  };
  if (!user) return <Loader />;
  return (
    <Wrap>
      <Container>
        <Main>
          {/* Title creation and redirection arrow */}
          <NameStatus title="Editar usuario" to="/admin-users" />
        </Main>
        <Hero>
          {/* Show image component according to number */}
          <HeaderImages numberImg="4" />
        </Hero>
        {/* Form creation */}
        <Form>
          <SectionForm>
            <InputContainer>
              <div>
                <label htmlFor="name">
                  {" "}
                  <IconAccountCircle
                    width="50px"
                    height="50px"
                    fill="#DE18AD"
                  />{" "}
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nombre"
                  defaultValue={user ? user[0].name : ""}
                  onChange={(e) => setName(e.target.value)}
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
                  placeholder="Correo electronico"
                  defaultValue={user ? user[0].email : ""}
                  onChange={(e) => setEmail(e.target.value)}
                />
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
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  defaultValue={user ? "123456" : ""}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </InputContainer>
            <Title>Editar Usuario</Title>
            <CreateButton>
              <Buttons color="#2DD881" value="Editar" onClick={editUser} />
            </CreateButton>
            <CancelButton>
              <Buttons color="#DE3C48" value="Cancelar" />
            </CancelButton>
          </SectionForm>
        </Form>
      </Container>
    </Wrap>
  );
};
