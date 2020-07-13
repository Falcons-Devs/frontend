import React, { useEffect, useState } from "react";
import Axios from "axios";

// Import the components
import Context from "../../../../../Context";
import { Buttons } from "../../../../Buttons";
import { NameStatus } from "../../../../NameStatus";
import { Schedule as ShowSchedule } from "../../../../Schedule";
import { List } from "../../../../List";
import { Loader } from "../../../../Loader";

// Import presentational components of styled components
import {
  Wrap,
  Container,
  ArrowButton,
  Beautician,
  Procedures,
  Schedule,
  ConfirmButton,
} from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
export const CreateAppointment = () => {
  const [data, setData] = useState(false);
  const [stylist, setStylist] = useState([]);
  const [procedures, setProcedures] = useState([]);
  useEffect(() => {
    window.scroll(0, 0);
    const fetchData = async () => {
      let beauticianArray = [];
      let procedureArray = [];
      const beautician = await Axios.get("http://104.198.182.133/stylists");
      const procedures = await Axios.get("http://104.198.182.133/procedures");
      for (const key in beautician.data.body) {
        let person = {};
        person.id = beautician.data.body[key].id;
        person.name = beautician.data.body[key].name_stylist;
        beauticianArray.push(person);
      }
      for (const key in procedures.data.body) {
        let procedure = {};
        procedure.id = procedures.data.body[key].id;
        procedure.name = procedures.data.body[key].name_procedure;
        procedureArray.push(procedure);
      }
      setProcedures(procedureArray);
      setStylist(beauticianArray);
      setData(true);
    };
    if (data === false) fetchData();
  });
  return (
    <Context.Consumer>
      {({ changeType }) => {
        if (stylist.length === 0 || !procedures.length === 0) return <Loader />;
        changeType("Client");
        return (
          <Wrap>
            <Container>
              <ArrowButton>
                <NameStatus title="Crear cita" to={"/client"} />
              </ArrowButton>
              <Beautician>
                <List
                  list={stylist}
                  topic="Beautician"
                  title="Elige esteticista"
                />
              </Beautician>
              <Procedures>
                <List
                  list={procedures}
                  topic="Procedure"
                  title="Elige procedimientos"
                />
              </Procedures>
              <Schedule>
                <ShowSchedule title="Elige un horario" />
              </Schedule>
              <ConfirmButton>
                <Buttons value="Crear cita" color="#2DD881" />
              </ConfirmButton>
            </Container>
          </Wrap>
        );
      }}
    </Context.Consumer>
  );
};
