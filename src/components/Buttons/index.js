import React from "react";

import { Button, Link } from "./styles";

export const Buttons = ({ value, to, color }) => {
  return (
    <>
      {to ? (
        <Link to="/signin">Registrarse</Link>
      ) : (
        <Button color={color}> {value} </Button>
      )}
    </>
  );
};
