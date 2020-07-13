import React from "react";
import Context from "../../Context";
import Swal from "sweetalert2";
import { Redirect } from "@reach/router";

export const Logout = () => (
  <Context.Consumer>
    {({ changeType, changeToken }) => {
      changeType("Public");
      localStorage.removeItem("token");
      changeToken("");
      Swal.fire({
        icon: "success",
        title: "Cierre de sesión exitoso",
        showConfirmButton: false,
        timer: 1500,
      });
      return <Redirect to="/" />;
    }}
  </Context.Consumer>
);
