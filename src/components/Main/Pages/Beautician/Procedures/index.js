import React, { useEffect, useState } from "react";
import Axios from "axios";

// Import the components
import Context from "../../../../../Context";
import { Buttons } from "../../../../Buttons";
import { NameStatus } from "../../../../NameStatus";
import { HeaderImages } from "../../../../HeaderImages";
import { List } from "../../../../List";
import { Loader } from "../../../../Loader";

// Import the Navigation Link
import { Link } from "@reach/router";

// Import presentational components of styled components
import {
  Wrap,
  Container,
  ArrowButton,
  Hero,
  Procedures as ProceduresContainer,
  CancelButton,
  ConfirmButton,
} from "./styles";

const list = [
  "Procedimiento 1",
  "Procedimiento 2",
  "Procedimiento 3",
  "Procedimiento 4",
  "Procedimiento 5",
  "Procedimiento 6",
  "Procedimiento 7",
  "Procedimiento 8",
  "Procedimiento 9",
  "Procedimiento 10",
  "Procedimiento 11",
  "Procedimiento 11",
  "Procedimiento 12",
  "Procedimiento 13",
  "Procedimiento 14",
  "Procedimiento 15",
];

// Import useEffect So that when the user changes the page it goes to the top
export const Procedures = () => {
  const [data, setData] = useState(false);
  const [procedures, setProcedures] = useState({});
  const [content, setContent] = useState([]);
  useEffect(() => {
    window.scroll(0, 0);
    const fetchData = async () => {
      const resultData = await Axios.get("http://104.198.182.133/procedures");
      setProcedures(resultData.data.body);
      setData(true);
      let content = [];
      for (const key in procedures) {
        if (procedures[key].active !== null) {
          let procedure = {};
          procedure.id = procedures[key].id.toString();
          procedure.name = procedures[key].name_procedure.toString();
          content.push(procedure);
        }
      }
      setContent(content);
    };
    if (data === false) fetchData();
  });
  if (content.lenght === 0) return <Loader />;
  return (
    <Context.Consumer>
      {({ changeType, token }) => {
        changeType("Beautician");
        return (
          <div>
            <Wrap>
              <Container>
                <ArrowButton>
                  {/* Title creation and redirection arrow */}
                  <NameStatus title="Mis procedimientos" to={"/beautician"} />
                </ArrowButton>
                <Hero>
                  {/* Show image component according to number */}
                  <HeaderImages numberImg="2" />
                </Hero>
                <ProceduresContainer>
                  {/* Show list component */}
                  <List
                    list={content}
                    title="Procedimientos"
                    topic="Procedure "
                  />
                </ProceduresContainer>
                {/* Show component of cancel button */}
                <CancelButton>
                  <Link to="/beautician">
                    <Buttons value="Cancelar" color="#DE3C48" />
                  </Link>
                </CancelButton>
                {/* Show component of accept button */}
                <ConfirmButton>
                  <Buttons value="Confirmar" color="#2DD881" />
                </ConfirmButton>
              </Container>
            </Wrap>
          </div>
        );
      }}
    </Context.Consumer>
  );
};
