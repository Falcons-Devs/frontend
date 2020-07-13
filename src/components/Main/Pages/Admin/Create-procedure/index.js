import React from "react";
import Axios from "axios";
import Swal from "sweetalert2";

// Import the components
import Context from "../../../../../Context";
import { NameStatus } from "../../../../NameStatus";
import { HeaderImages } from "../../../../HeaderImages";
import { AdminForms } from "../../../../AdminForms";

// Import presentational components of styled components
import { Container, Main, Hero, Wrap } from "./styles";
import { Redirect } from "@reach/router";

// Import useEffect So that when the user changes the page it goes to the top
class CreateProcedureAdmin extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      name: "",
      description: "",
      price: "",
      duration: "",
    },
    redirect: false,
  };

  handleClick = async (e) => {
    this.setState({ loading: true, error: null });
    try {
      if (
        this.state.form.name !== "" &&
        this.state.form.description !== "" &&
        this.state.form.price !== "" &&
        this.state.form.duration !== "" &&
        this.state.form.price > 0 &&
        this.state.form.duration > 0
      ) {
        let url = "";
        let body = "";
        let headers = "";
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("UserId");
        url = `http://104.198.182.133/admin/procedure/"${userId}"`;
        body = {
          name_procedure: this.state.form.name,
          description: this.state.form.description,
          price: this.state.form.price,
          duration_time: this.state.form.duration,
          active: 1,
        };
        headers = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const result = await Axios.post(url, body, headers);
        if (result.status === 201) {
          Swal.fire({
            icon: "success",
            title: "¡Procedimiento creado exitosamente!",
            showConfirmButton: false,
            timer: 1500,
          });
          this.setState({ redirect: true });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "¡Hubo un error!",
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ningún campo debe estar vació o valores en 0.",
        });
      }
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "¡Hubo un error!",
      });
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
    if (this.state.redirect === true)
      return <Redirect to="/admin-procedures" />;
    return (
      <Context.Consumer>
        {({ changeType }) => {
          changeType("Admin");
          return (
            <Wrap>
              <Container>
                <Main>
                  {/* Title creation and redirection arrow */}
                  <NameStatus
                    title="Crear procedimiento"
                    to="/admin-procedures"
                  />
                </Main>
                <Hero>
                  {/* Show image component according to number */}
                  <HeaderImages numberImg="1" />
                </Hero>
                {/* Form creation */}
                <AdminForms
                  actionUser="Crear Procedimiento"
                  buttonAction="Crear"
                  onClick={this.handleClick}
                  onChange={this.handleChange}
                  formValues={this.state.form}
                />
              </Container>
            </Wrap>
          );
        }}
      </Context.Consumer>
    );
  }
}
export default CreateProcedureAdmin;
