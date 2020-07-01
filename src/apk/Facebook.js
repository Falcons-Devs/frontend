import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

function Facebook() {
  const [state, setState] = useState({
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  });

  const { isLoggedIn, userID, name, email, picture } = state;

  const componentClicked = () => console.log("Clickear");

  const responseFacebook = ({
    userID,
    name,
    email,
    picture: {
      data: { url },
    },
  }) => {
    // console.log(response)
    setState({
      isLoggedIn: true,
      userID: userID,
      name: name,
      email: email,
      picture: url,
    });
  };

  const handleLogout = () => {
    setState({
      isLoggedIn: false,
      userID: false,
      name: null,
      email: null,
      picture: null,
    });
    console.log("Logout");
  };
  console.log(userID);

  let fbContent;

  if (isLoggedIn) {
    fbContent = (
      <div>
        <img src={picture} alt={name} />
        <h2>Welcome {name} </h2>
        <p>Email {email} </p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    fbContent = (
      <FacebookLogin
        appId="564665930850653"
        autoLoad={false}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
        render={(renderProps) => (
          <button onClick={renderProps.onClick}>Iniciar con Facebook</button>
        )}
      />
    );
  }

  return <div>{fbContent}</div>;
}

export default Facebook;
