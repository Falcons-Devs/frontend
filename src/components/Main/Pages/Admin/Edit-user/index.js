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
      password: "1234",
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
            `http://104.198.182.133/stylists/"${this.props.userId}"`
          );
          if (data.data.body.length > 0) {
            this.setState({
              loading: false,
              form: {
                name: data.data.body[0].name_stylist,
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
    this.setState({
      form: {
        ...this.state.form,
        [e.target.id]: e.target.value,
      },
    });
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

        console.log(this.props.userId);

        const today = new Date();
        const hour = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

        const token = localStorage.getItem("token");
        if (this.state.form.type === "admin") {
          url = "http://104.198.182.133/admin";
          body = {
            id: this.props.userId,
            email: this.state.form.email,
            name: this.state.form.name,
            password: this.state.form.password,
            active: "1",
          };
          headers = {
            headers: { Authorization: `Bearer ${token}` },
          };
        } else if (this.state.form.type === "beautician") {
          console.log("Entro esteticista");
          url = `http://104.198.182.133/stylists`;
          body = {
            id: this.props.userId,
            name_stylist: this.state.form.name,
            email: this.state.form.email,
            availabitily: 1,
            password: this.state.form.password,
            dealy_time: hour,
            active: 1,
          };
          headers = {
            headers: { Authorization: `Bearer ${token}` },
          };
        } else if (this.state.form.type === "client") {
          console.log("Entro");
          url = "http://104.198.182.133/user";
          body = {
            id: this.props.userId,
            name: this.state.form.name,
            email: this.state.form.email,
            password: this.state.form.password,
          };
          headers = {
            headers: { Authorization: `Bearer ${token}` },
          };
        }
        const result = await Axios.put(url, body, headers);
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
