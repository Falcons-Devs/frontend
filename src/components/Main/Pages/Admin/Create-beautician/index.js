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
class CreateBeauticianAdmin extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      name: "",
      email: "",
      password: "1234",
    },
  };

  handleClick = async (e) => {
    this.setState({ loading: true, error: null });
    try {
      if (this.state.form.email !== "" && this.state.form.name !== "") {
        let url = "";
        let body = "";
        let headers = "";
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("UserId");
        url = `http://104.198.182.133/admin/stylist/"${userId}"`;
        body = {
          name_stylist: this.state.form.name,
          email: this.state.form.email,
          password: this.state.form.password,
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
                    title="Crear esteticista"
                    to="/admin-beautician"
                  />
                </Main>
                <Hero>
                  {/* Show image component according to number */}
                  <HeaderImages numberImg="2" />
                </Hero>
                {/* Form creation */}
                <AdminForms
                  actionUser="Crear Esteticista"
                  type="Esteticista"
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

export default CreateBeauticianAdmin;
