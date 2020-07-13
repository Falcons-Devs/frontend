import React from "react";
import Context from "../../Context";
import Swal from "sweetalert2";
import { navigate } from "@reach/router";

export const Logout = () => (
  <Context.Consumer>
    {({ changeType, changeToken }) => {
      changeType("Public");
      changeToken("");
      Swal.fire({
        icon: "success",
        title: "Cierre de sesión exitoso",
        showConfirmButton: false,
        timer: 3000,
      }).then(() => {
        return navigate("/");
      });
    }}
  </Context.Consumer>
);
