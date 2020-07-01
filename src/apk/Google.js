import React, { useState } from "react";
import GoogleLogin from "react-google-login";

function Google() {
  const [state, setState] = useState({
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  });

  const { isLoggedIn, userID, name, email, picture } = state;

  const responseGoogle = ({
    googleId,
    profileObj: { name, email, imageUrl },
  }) => {
    setState({
      isLoggedIn: true,
      userID: googleId,
      name: name,
      email: email,
      picture: imageUrl,
    });
  };
  console.log(isLoggedIn);

  const handleLogout = () => {
    setState({
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: "",
    });
    console.log("Logout");
  };

  let gooContent;

  if (isLoggedIn) {
    gooContent = (
      <div>
        <img src={picture} alt={name} />
        <h2>Welcome {name} </h2>
        <p>Email {email} </p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    gooContent = (
      <GoogleLogin
        clientId="892325863398-55kvss5homonk6kpdbokac4t96oev264.apps.googleusercontent.com"
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            Login with Google
          </button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    );
  }
  return <div>{gooContent}</div>;
}

export default Google;
