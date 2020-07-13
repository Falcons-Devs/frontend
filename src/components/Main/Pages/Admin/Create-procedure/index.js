import React from "react";
import Axios from "axios";

// Import the components
import Context from "../../../../../Context";
import { NameStatus } from "../../../../NameStatus";
import { HeaderImages } from "../../../../HeaderImages";
import { AdminForms } from "../../../../AdminForms";

// Import presentational components of styled components
import { Container, Main, Hero, Wrap } from "./styles";

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
  };

  handleClick = async (e) => {
    this.setState({ loading: true, error: null });
    try {
      if (
        this.state.form.name !== "" &&
        this.state.form.description !== "" &&
        this.state.form.price !== "" &&
        this.state.form.duration !== ""
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
        };
        headers = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const result = await Axios.post(url, body, headers);
        console.log(result.status);
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
