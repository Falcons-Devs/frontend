import React from "react";

import { Button } from "./styles";

export const Buttons = ({ value, color, responsivetablet }) => {
  return (
    <Button color={color} responsivetablet={responsivetablet}>
      {" "}
      {value}{" "}
    </Button>
  );
};
