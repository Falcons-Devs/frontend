import React, { useEffect, useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

// Import the components
import Context from "../../../../../Context";
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

  const deleteProcedure = async (e) => {
    const id = e.target.id;
    let body = {};
    await Axios.get(`http://104.198.182.133/procedures/"${id}"`).then((res) => {
      let {
        id,
        name_procedure,
        description,
        price,
        duration_time,
        promotion,
        id_admin,
      } = res.data.body[0];
      body.id = id;
      body.name_procedure = name_procedure;
      body.description = description;
      body.price = price;
      body.promotion = promotion;
      body.duration_time = duration_time;
      body.active = 0;
    });
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Un procedimiento eliminado jamas será recuperado!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2DD881",
      cancelButtonColor: "#DE3C48",
      confirmButtonText: "¡Si, eliminalo!",
    }).then(async (result) => {
      if (result.value) {
        console.log(body);
        await Axios.put(`http://104.198.182.133/procedures/`, body).then(
          (res) => {
            console.log(res);
            Swal.fire(
              "¡Eliminado!",
              "El procedimiento ha sido eliminado.",
              "success"
            );
          }
        );
      }
    });
  };

  let mainContent = (
    <TableInfo
      col1="#"
      col2="Nombre"
      col3="Acciones"
      title="Procedimientos"
      iconDelete="true"
      onClick={(e) => deleteProcedure(e)}
      data={content}
    />
  );
  if (screen.width <= 375) {
    mainContent = content.map((item) => {
      return <MobileProcedure key={`Procedure ${item.id}`} value={item.name} />;
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
              <Table>{content.length === 0 ? <Loader /> : mainContent}</Table>
            </Container>
          </Wrap>
        );
      }}
    </Context.Consumer>
  );
};
