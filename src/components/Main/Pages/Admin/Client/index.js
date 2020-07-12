import React, { useEffect, useState } from "react";
import Axios from "axios";

// Import the components
import { NameStatus } from "../../../../NameStatus";
import { Table as TableInfo } from "../../../../Table";
import { CardPerson } from "../../../../CardPerson";
import { Loader } from "../../../../Loader";

// Import presentational components of styled components
import { BackgroudImages } from "../../../../HeaderImages/styles";
import { Wrap, Container, ArrowButton, Title, Hero, Table } from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
export const Client = () => {
  const [data, setData] = useState(false);
  const [users, setUsers] = useState({});
  const [content, setContent] = useState([]);
  useEffect(() => {
    window.scroll(0, 0);
    const fetchData = async () => {
      const result = await Axios.get("http://104.198.182.133/user");
      for (const key in result.data.body) {
        result.data.body[key].type = "Client";
      }
      setUsers(result.data.body);
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
      col5="Editar Cliente"
      title="Clientes"
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
    <Wrap>
      <Container>
        {/* Title creation and redirection arrow */}
        <ArrowButton>
          <NameStatus title="Clientes" to="/admin" />
        </ArrowButton>
        <Hero>
          {/* Show image component according to number */}
          <BackgroudImages numberImg="3" />
        </Hero>
        {/* Creating the customer table */}
        <Table>{content.length === 0 ? <Loader /> : mainContent}</Table>
      </Container>
    </Wrap>
  );
};
