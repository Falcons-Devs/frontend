import React from "react";
import Axios from "axios";

// Import the components
import { NameStatus } from "../../../../NameStatus";
import { HeaderImages } from "../../../../HeaderImages";
import { AdminForms } from "../../../../AdminForms";

// Import the Navigation Link
import { Link } from "@reach/router";

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
      password: "",
    },
  };

  handleClick = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      if (
        this.state.form.email !== "" &&
        this.state.form.name !== "" &&
        this.state.form.password !== "" &&
        this.state.form.type !== ""
      ) {
        console.log("Guardado");
        console.log(this.state.form);
        let url = "";
        let headers = "";
        if (this.state.form.type === "admin") {
          url = "http://104.198.182.133/admin";
          token =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkRBcEtJcXE0TUEiLCJlbWFpbCI6ImhlY3Rvcm1yQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA1JE1NY3U5cTdCbjl3UkFLZVNBMXFGdC45TG5hdkhOdXcyQnBPU1JYS3A5VGFBTlpnY3pwY3ZlIiwiaWF0IjoxNTk0NTM5MjkyfQ.3XMew-f3W-w2ZWifM3LZil5zT2z9c7WXtGZW3_IawxY";
          headers = `headers: { Authorization: 'Bearer ${token}' }`;
        } else if (this.state.form.type === "beautician") {
          // url = "http://104.198.182.133/admin/stylist/:id";
        } else if (this.state.form.type === "client") {
          url = "http://104.198.182.133/user";
        }
        const result = await Axios.post(url, headers, {
          email: this.state.form.email,
          name: this.state.form.name,
          password: this.state.form.password,
        });
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
          />
        </Container>
      </Wrap>
    );
  }
}

export default CreateUserAdmin;
