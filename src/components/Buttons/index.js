import React from "react";

// Import presentational components of styled components
import { Button } from "./styles";

export const Buttons = ({ value, color, responsivetablet }) => {
  // Condition for the resolution of the screen. Table
  if (screen.width <= 768) responsivetablet = "14px";

  return (
    <Button color={color} responsivetablet={responsivetablet}>
      {" "}
      {value}{" "}
    </Button>
  );
};
