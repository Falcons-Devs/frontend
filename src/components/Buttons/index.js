import React from "react";

import { Button } from "./styles";

export const Buttons = ({ value, color }) => {
  return <Button color={color}> {value} </Button>;
};
