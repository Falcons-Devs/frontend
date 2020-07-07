import React from "react";

import { Button } from "./styles";

export const Buttons = ({ value, color, responsiveTablet }) => {
  return (
    <Button color={color} responsiveTablet={responsiveTablet}>
      {" "}
      {value}{" "}
    </Button>
  );
};
