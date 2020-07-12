import React from "react";
import Context from "../../Context";
import { Redirect } from "@reach/router";

export const Logout = () => (
  <Context.Consumer>
    {({ changeType, changeToken }) => {
      changeType("Public");
      changeToken("");
      return <Redirect to="/" />;
    }}
  </Context.Consumer>
);
