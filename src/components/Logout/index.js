import React from "react";
import Context from "../../Context";
import Swal from "sweetalert2";
import { navigate } from "@reach/router";

export const Logout = () => (
  <Context.Consumer>
    {({ changeType, changeToken }) => {
      changeType("Public");
      localStorage.removeItem("token");
      changeToken("");
      Swal.fire({
        icon: "success",
        title: "Cerrando sesión...",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        return navigate("/");
      });
    }}
  </Context.Consumer>
);
