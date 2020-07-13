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
class CreateUserAdmin extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      name: "",
      email: "",
      type: "",
      password: "1234",
    },
  };

  handleClick = async (e) => {
    this.setState({ loading: true, error: null });
    try {
      if (
        this.state.form.email !== "" &&
        this.state.form.name !== "" &&
        this.state.form.type !== ""
      ) {
        let url = "";
        let body = "";
        let headers = "";
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("UserId");
        if (this.state.form.type === "admin") {
          url = "http://104.198.182.133/admin";
          body = {
            email: this.state.form.email,
            name: this.state.form.name,
            password: this.state.form.password,
          };
          headers = {
            headers: { Authorization: `Bearer ${token}` },
          };
        } else if (this.state.form.type === "beautician") {
          url = `http://104.198.182.133/admin/stylist/"${userId}"`;
          body = {
            name_stylist: this.state.form.name,
            email: this.state.form.email,
            password: this.state.form.password,
          };
          headers = {
            headers: { Authorization: `Bearer ${token}` },
          };
        } else if (this.state.form.type === "client") {
          url = "http://104.198.182.133/user";
          body = {
            email: this.state.form.email,
            name: this.state.form.name,
            password: this.state.form.password,
          };
        }
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
                  <NameStatus title="Crear usuario" to="/admin-users" />
                </Main>
                <Hero>
                  {/* Show image component according to number */}
                  <HeaderImages numberImg="4" />
                </Hero>
                {/* Form creation */}
                <AdminForms
                  actionUser="Crear Usuario"
                  type="Usuario"
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

export default CreateUserAdmin;
