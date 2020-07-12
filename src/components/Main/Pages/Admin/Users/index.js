import React, { useEffect, useState } from "react";
import Axios from "axios";

// Import the components
import Context from "../../../../../Context";
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";
import { Table as TableInfo } from "../../../../Table";
import { CardPerson } from "../../../../CardPerson";
import { Loader } from "../../../../Loader";

// Import the icons svg
import { IconAdd } from "../../../../../assets/static/icon-add";

// Import the Navigation Link
import { Link } from "@reach/router";

// Import presentational components of styled components
import { Container, Main, Table, Wrap } from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
export const Users = () => {
  const [data, setData] = useState(false);
  const [users, setUsers] = useState({});
  const [content, setContent] = useState([]);
  useEffect(() => {
    window.scroll(0, 0);
    const fetchData = async () => {
      const result = await Axios.get("http://104.198.182.133/user");
      const admins = await Axios.get("http://104.198.182.133/admin");
      for (const key in admins.data.body) {
        admins.data.body[key].type = "Admin";
      }
      for (const key in result.data.body) {
        result.data.body[key].type = "Client";
      }
      const union = Object.assign(result.data.body, admins.data.body);
      setUsers(union);
      setData(true);
      let content = [];
      for (const key in users) {
        if (users[key].active === 1 && users[key].name != null) {
          let person = {};
          person.id = users[key].id.toString();
          person.name = users[key].name.toString();
          person.email = users[key].email.toString();
          person.type = users[key].type.toString();
          content.push(person);
        }
      }
      setContent(content);
    };
    if (data === false) fetchData();
  });

  let mainContent = (
    <TableInfo
      col1="#"
      col2="Nombre"
      col3="Email"
      col4="Tipo"
      col5="Editar usuario"
      title="Usuarios"
      data={content}
    />
  );
  if (screen.width <= 375) {
    mainContent = content.map((item) => {
      return (
        <CardPerson
          key={`Cliente ${item.id}`}
          name={item.name}
          to={`/admin-edit-user/${item.id}`}
          email={item.email}
          type={item.type}
          title="Editar"
        />
      );
    });
  }
  return (
    <Context.Consumer>
      {({ changeType }) => {
        changeType("Admin");
        return (
          <Wrap>
            <Container>
              <Main>
                {/* Title creation, creation button and redirection arrow */}
                <NameStatus title="Ver usuarios" to="/admin" />
                <Link to="/admin-create-user">
                  {screen.width <= 375 ? (
                    <IconAdd width="40px" height="40px" fill="#2DD881" />
                  ) : (
                    <Buttons
                      value="Crear usuario"
                      responsivetablet
                      color="#2DD881"
                    />
                  )}
                </Link>
              </Main>
              {/* Creating the customer table */}
              <Table>{content.length === 0 ? <Loader /> : mainContent}</Table>
            </Container>
          </Wrap>
        );
      }}
    </Context.Consumer>
  );
};
