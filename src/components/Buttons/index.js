import React from "react";

import { Button } from "./styles";

export const Buttons = ({ value, color, responsivetablet }) => {
  if (screen.width <= 768) responsivetablet = "14px";

  return (
    <Button color={color} responsivetablet={responsivetablet}>
      {" "}
      {value}{" "}
    </Button>
  );
};
