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
class CreateAppointmentClient extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      beautician: [],
      radioBeautician: "",
      procedure: [],
      checkboxProcedure: "",
      hour: "8:00",
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      const stylists = await Axios.get(`http://104.198.182.133/stylists`);
      if (stylists.data.body.length > 0) {
        this.state.form.beautician.push(stylists.data.body);
      }
      const procedures = await Axios.get(`http://104.198.182.133/procedures`);
      if (procedures.data.body.length > 0) {
        this.state.form.procedure.push(procedures.data.body);
      }
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleClick = async (e) => {
    this.setState({ loading: true, error: null });
    try {
      if (
        this.state.form.radioBeautician !== "" &&
        this.state.form.checkboxProcedure !== ""
      ) {
        console.log(
          `Guardar ${this.state.form.radioBeautician} ${this.state.form.checkboxProcedure} ${this.state.form.hour}`
        );
      } else {
        console.log("Ningún campo debe estar vació");
      }
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
      console.log(error);
    }
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <Context.Consumer>
        {({ changeType }) => {
          if (
            this.state.form.beautician.length === 0 ||
            this.state.form.procedure.length === 0
          )
            return <Loader />;
          changeType("Client");
          return (
            <Wrap>
              <Container>
                <ArrowButton>
                  <NameStatus title="Crear cita" to={"/client"} />
                </ArrowButton>
                <Beautician>
                  <List
                    list={this.state.form.beautician}
                    listFull={this.state.form.beautician}
                    topic="Beautician"
                    title="Elige esteticista"
                    onChange={this.handleChange}
                  />
                </Beautician>
                <Procedures>
                  <List
                    list={this.state.form.procedure}
                    listFull={this.state.form.procedure}
                    topic="Procedure"
                    title="Elige procedimientos"
                    onChange={this.handleChange}
                  />
                </Procedures>
                <Schedule>
                  <ShowSchedule title="Elige un horario" />
                </Schedule>
                <ConfirmButton>
                  <Buttons
                    value="Crear cita"
                    color="#2DD881"
                    onClick={this.handleClick}
                  />
                </ConfirmButton>
              </Container>
            </Wrap>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default CreateAppointmentClient;
