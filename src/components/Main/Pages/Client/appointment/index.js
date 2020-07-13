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
      beauticianCheck: "",
      procedure: [],
      procedureCheck: "",
      hour: "",
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
        for (const key in stylists.data.body) {
          if (stylists.data.body[key].active === 1) {
            this.state.form.beautician.push(
              stylists.data.body[key].name_stylist
            );
          }
        }
      }
      const procedures = await Axios.get(`http://104.198.182.133/procedures`);
      if (procedures.data.body.length > 0) {
        for (const key in procedures.data.body) {
          if (procedures.data.body[key].active === 1) {
            this.state.form.procedure.push(
              procedures.data.body[key].name_procedure
            );
          }
        }
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
        this.state.form.beautician !== "" &&
        this.state.form.procedure !== ""
      ) {
        console.log("Click");
        // let url = "";
        // let body = "";
        // let headers = "";
        // const token = localStorage.getItem("token");
        // const userId = localStorage.getItem("UserId");
        // if (this.state.form.type === "admin") {
        //   url = "http://104.198.182.133/admin";
        //   body = {
        //     email: this.state.form.email,
        //     name: this.state.form.name,
        //     password: this.state.form.password,
        //   };
        //   headers = {
        //     headers: { Authorization: `Bearer ${token}` },
        //   };
        // } else if (this.state.form.type === "beautician") {
        //   url = `http://104.198.182.133/admin/stylist/"${userId}"`;
        //   body = {
        //     name_stylist: this.state.form.name,
        //     email: this.state.form.email,
        //     password: this.state.form.password,
        //   };
        //   headers = {
        //     headers: { Authorization: `Bearer ${token}` },
        //   };
        // } else if (this.state.form.type === "client") {
        //   url = "http://104.198.182.133/user";
        //   body = {
        //     email: this.state.form.email,
        //     name: this.state.form.name,
        //     password: this.state.form.password,
        //   };
        // }
        // const result = await Axios.post(url, body, headers);
        // console.log(result.status);
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
        [e.target.id]: e.target.value,
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
                    topic="Beautician"
                    title="Elige esteticista"
                  />
                </Beautician>
                <Procedures>
                  <List
                    list={this.state.form.procedure}
                    topic="Procedure"
                    title="Elige procedimientos"
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
                    onChange={this.handleChange}
                    formValues={this.state.form}
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
