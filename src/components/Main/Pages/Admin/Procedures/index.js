import React, { useEffect, useState } from "react";
import Axios from "axios";

// Import the components
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";
import { Table as TableInfo } from "../../../../Table";
import { MobileProcedure } from "../../../../MobileProcedure";

// Import the icons svg
import { IconAdd } from "../../../../../assets/static/icon-add";

// Import the Navigation Link
import { Link } from "@reach/router";

// Import presentational components of styled components
import { Container, Main, Table, Wrap, ProcedureContainer } from "./styles";
import { Loader } from "../../../../Loader";

// Import useEffect So that when the user changes the page it goes to the top
export const Procedures = () => {
  const [data, setData] = useState(false);
  const [procedures, setProcedures] = useState({});
  const [content, setContent] = useState([]);
  useEffect(() => {
    window.scroll(0, 0);
    const fetchData = async () => {
      const resultData = await Axios.get("http://104.198.182.133/procedures");
      for (const key in resultData.data.body) {
        resultData.data.body[key].type = "Client";
      }
      setProcedures(resultData.data.body);
      setData(true);
      let content = [];
      for (const key in procedures) {
        if (procedures[key].active === null) {
          let procedur = {};
          procedur.id = procedures[key].id.toString();
          procedur.name = procedures[key].name_procedure.toString();
          content.push(procedur);
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
      col3="Acciones"
      title="Procedimientos"
      iconDelete="true"
      data={content}
    />
  );
  if (screen.width <= 375) {
    mainContent = content.map((item) => {
      return <MobileProcedure key={`Procedure ${item.id}`} value={item.name} />;
    });
  }

  return (
    <Wrap>
      <Container>
        <Main>
          {/* Title creation, creation button and redirection arrow */}
          <NameStatus title="Procedimientos" to="/admin" />
          <Link to="/admin-create-procedure">
            {screen.width <= 375 ? (
              <IconAdd width="50px" height="50px" fill="#2DD881" />
            ) : (
              <Buttons
                value="Crear procedimiento"
                responsivetablet
                color="#2DD881"
              />
            )}
          </Link>
        </Main>
        {/* Creating the customer table */}
        <Table>
          {/* {screen.width <= 375 ? (
            <ProcedureContainer>
              <MobileProcedure value="Procedimiento 1" />
              <MobileProcedure value="Procedimiento 2" />
              <MobileProcedure value="Procedimiento 3" />
              <MobileProcedure value="Procedimiento 4" />
              <MobileProcedure value="Procedimiento 5" />
            </ProcedureContainer>
          ) : (
            <TableInfo
              col1="#"
              col2="Nombre"
              col3="Acciones"
              title="Procedimientos"
              data={[]}
            />
          )} */}
          {content.length === 0 ? <Loader /> : mainContent}
        </Table>
      </Container>
    </Wrap>
  );
};
