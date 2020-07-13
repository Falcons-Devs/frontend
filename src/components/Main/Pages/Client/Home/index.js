import React, { useEffect } from "react";
import Axios from "axios";
// Import component for show Profile and images with process
import { ShowMyProfile } from "../../../../ShowMyProfile";
import { ImagesWithProcess } from "../../../../ImagesWithProcess";
import Context from "../../../../../Context";

// Import presentational components of styled components
import {
  Wrap,
  Container,
  Profile,
  MyAppointment,
  CreateAppointment,
  H2,
} from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
class HomeClient extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      name: "",
      email: "",
      hour: "",
      duration: "",
      nameBeautician: "",
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      const userId = localStorage.getItem("UserId");
      const data = await Axios.get(`http://104.198.182.133/user/"${userId}"`);
      if (data.data.body.length > 0) {
        this.setState({
          loading: false,
          form: {
            name: data.data.body[0].name,
            email: data.data.body[0].email,
          },
        });
      }
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return (
      <Context.Consumer>
        {({ changeType, token }) => {
          changeType("Client");
          return (
            <>
              <H2>Hola {this.state.form.name}</H2>
              <Wrap>
                <Container>
                  <Profile>
                    {" "}
                    <ShowMyProfile
                      nameBeautician={this.state.form.name}
                      nameUser={this.state.form.name}
                      email={this.state.form.email}
                      hour={this.state.form.hour}
                      duration={this.state.form.duration}
                      nameBeautician={this.state.form.nameBeautician}
                    />{" "}
                  </Profile>
                  <MyAppointment>
                    {" "}
                    <ImagesWithProcess
                      nameImage="1"
                      alt="Mis citas"
                      to="/client-appointments"
                      responsivemobilewidth="40vw"
                      responsivemobileheight="200px"
                    />{" "}
                  </MyAppointment>
                  <CreateAppointment>
                    <ImagesWithProcess
                      nameImage="5"
                      alt="Crear cita"
                      to="/client-create-appointment"
                      width="100%"
                      height="300px"
                      responsivetablet="368px"
                      responsivemobilewidth="40vw"
                      responsivemobileheight="200px"
                    />
                  </CreateAppointment>
                </Container>
              </Wrap>
            </>
          );
        }}
      </Context.Consumer>
    );
  }
}
export default HomeClient;
