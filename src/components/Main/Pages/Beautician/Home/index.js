import React from "react";
import Axios from "axios";

// Import the components
import Context from "../../../../../Context";
import { ShowMyProfile } from "../../../../ShowMyProfile";
import { ImagesWithProcess } from "../../../../ImagesWithProcess";

// Import presentational components of styled components
import {
  Wrap,
  Container,
  Profile,
  Agenda,
  Schedule,
  Procedures,
  Title,
} from "./styles";

// Import useEffect So that when the user changes the page it goes to the top
class HomeBeautician extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      name: "Hola",
      email: "",
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      const userId = localStorage.getItem("UserId");
      const data = await Axios.get(
        `http://104.198.182.133/stylists/"${userId}"`
      );
      if (data.data.body.length > 0) {
        this.setState({
          loading: false,
          form: {
            name: data.data.body[0].name_stylist,
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
        {({ changeType }) => {
          changeType("Beautician");
          return (
            <Wrap>
              <Title>Hola {this.state.form.name}</Title>
              <Container>
                <Profile>
                  {" "}
                  <ShowMyProfile nameUser="Nombre del usuario" />{" "}
                </Profile>
                <Agenda>
                  {/* Show the image component according to the number and add the title at the bottom */}{" "}
                  <ImagesWithProcess
                    nameImage="3"
                    alt="Mi agenda"
                    to="/beautician-diary"
                    responsivemobilewidth="140px"
                    responsivemobileheight="280px"
                  />{" "}
                </Agenda>
                <Schedule>
                  {/* Show the image component according to the number and add the title at the bottom */}
                  <ImagesWithProcess
                    nameImage="4"
                    alt="Mis horarios"
                    width="500px"
                    height="300px"
                    to="/beautician-schedule"
                    responsivetablet="160px"
                    responsivemobilewidth="140px"
                    responsivemobileheight="125px"
                  />
                </Schedule>
                <Procedures>
                  {/* Show the image component according to the number and add the title at the bottom */}
                  <ImagesWithProcess
                    nameImage="2"
                    alt="Mis procedimientos"
                    width="500px"
                    height="300px"
                    to="/beautician-procedure"
                    responsivetablet="160px"
                    responsivemobilewidth="140px"
                    responsivemobileheight="125px"
                  />
                </Procedures>
              </Container>
            </Wrap>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default HomeBeautician;
