import React, { useEffect, useState } from "react";
import Axios from "axios";

// Import the components
import Context from "../../../../../Context";
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";
import { CardPerson } from "../../../../CardPerson";

// Import the icons svg
import { IconAdd } from "../../../../../assets/static/icon-add";

// Import the Navigation Link
import { Link } from "@reach/router";

// Import presentational components of styled components
import { Wrap, Container, ArrowButton, Title } from "./styles";
import { Loader } from "../../../../Loader";

// Import useEffect So that when the user changes the page it goes to the top
export const Beautician = () => {
  const [data, setData] = useState(false);
  const [stylist, setStylist] = useState([]);
  const [content, setContent] = useState([]);
  useEffect(() => {
    window.scroll(0, 0);
    const fetchData = async () => {
      const beautician = await Axios.get("http://104.198.182.133/stylists");
      setStylist(beautician.data.body);
      setData(true);
      let content = [];
      // console.log(stylist);
      for (const key in stylist) {
        if (stylist[key].active === 1) {
          let person = {};
          person.id = stylist[key].id;
          person.name = stylist[key].name_stylist;
          person.email = stylist[key].email;
          person.dealy_time = stylist[key].dealy_time;
          content.push(person);
        }
      }
      setContent(content);
    };
    if (data === false) fetchData();
  });

  let mainContent = content.map((item) => {
    return (
      <CardPerson
        key={`Estilista ${item.id}`}
        name={item.name}
        email={item.email}
        schedule={item.dealy_time}
        to={`/admin-beautician-diary/${item.id}`}
        title="Agenda"
      />
    );
  });

  return (
    <Context.Consumer>
      {({ changeType }) => {
        changeType("Admin");
        return (
          <Wrap>
            {/* Title creation, creation button and redirection arrow */}
            <Title>
              <NameStatus title="Esteticistas" to={"/admin"} />
              <Link to="/admin-create-beautician">
                {screen.width <= 375 ? (
                  <IconAdd width="35px" height="35px" fill="#2DD881" />
                ) : (
                  <Buttons
                    value="Crear esteticista"
                    responsivetablet
                    color="#2DD881"
                  />
                )}
              </Link>
            </Title>
            {/* Creation of cards to present information to beauticians */}
            <Container>
              <ArrowButton></ArrowButton>
              {content.length === 0 ? <Loader /> : mainContent}
            </Container>
          </Wrap>
        );
      }}
    </Context.Consumer>
  );
};
