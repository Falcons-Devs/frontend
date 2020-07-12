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
class editUserAdmin extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      name: "",
      email: "",
      type: "",
      password: "",
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      const data = await Axios.get(
        `http://104.198.182.133/user/"${this.props.userId}"`
      );
      if (data.data.body.length > 0) {
        this.setState({
          loading: false,
          form: {
            name: data.data.body[0].name,
            email: data.data.body[0].email,
            type: "client",
          },
        });
      } else {
        const data = await Axios.get(
          `http://104.198.182.133/admin/"${this.props.userId}"`
        );
        if (data.data.body.length > 0) {
          this.setState({
            loading: false,
            form: {
              name: data.data.body[0].name,
              email: data.data.body[0].email,
              type: "admin",
            },
          });
        } else {
          const data = await Axios.get(
            `http://104.198.182.133/stylist/"${this.props.userId}"`
          );
          if (data.data.body.length > 0) {
            this.setState({
              loading: false,
              form: {
                name: data.data.body[0].name,
                email: data.data.body[0].email,
                type: "beautician",
              },
            });
          }
        }
      }
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChange = (e) => {
    console.log("Change");
    this.setState({
      form: {
        ...this.state.form,
        [e.target.id]: e.target.value,
      },
    });
  };

  handleClick = async (e) => {
    this.setState({ loading: true, error: null });

    // try {
    //   if (
    //     this.state.form.email !== "" &&
    //     this.state.form.name !== "" &&
    //     this.state.form.password !== "" &&
    //     this.state.form.type !== ""
    //   ) {
    //     console.log("Guardado");
    //     console.log(this.state.form);
    //     let url = "";
    //     let headers = "";
    //     if (this.state.form.type === "admin") {
    //       const token = localStorage.getItem("token");
    //       url = "http://104.198.182.133/admin";
    //       headers = `headers: { Authorization: 'Bearer ${token}' }`;
    //     } else if (this.state.form.type === "beautician") {
    //       // url = "http://104.198.182.133/admin/stylist/:id";
    //     } else if (this.state.form.type === "client") {
    //       url = "http://104.198.182.133/user";
    //     }
    //     const result = await Axios.post(url, headers, {
    //       email: this.state.form.email,
    //       name: this.state.form.name,
    //       password: this.state.form.password,
    //     });
    //     console.log(result.status);
    //   } else {
    //     console.log("Ningún campo debe estar vació");
    //   }
    //   this.setState({ loading: false });
    // } catch (error) {
    //   this.setState({ loading: false, error: error });
    //   console.log(error);
    // }
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
                  <NameStatus title="Editar usuario" to="/admin-users" />
                </Main>
                <Hero>
                  {/* Show image component according to number */}
                  <HeaderImages numberImg="4" />
                </Hero>
                {/* Form creation */}
                <AdminForms
                  actionUser="Editar Usuario"
                  type="Usuario"
                  buttonAction="Editar"
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

export default editUserAdmin;
