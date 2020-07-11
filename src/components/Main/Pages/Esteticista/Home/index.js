import React from "react";

// Import the components
import { NameStatus } from "../../../../NameStatus";
import { HeaderImages } from "../../../../HeaderImages";

export const HomeEsteticista = () => {
  return (
    <>
      <NameStatus />
      {/* Show image component according to number */}
      <HeaderImages numberImg="3" />
    </>
  );
};
