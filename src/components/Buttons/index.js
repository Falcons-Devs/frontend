import React from "react";

import { Button, Link } from "./styles";

export const Buttons = ({ value, color }) => {
  return <Button color={color}> {value} </Button>;
};
