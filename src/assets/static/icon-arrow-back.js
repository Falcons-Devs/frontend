import React from "react";

export const IconArrowBack = ({ fill, width = "24px", height = "24px" }) => (
  <svg height={height} viewBox="0 0 24 24" width={width}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"
      fill={fill}
    />
  </svg>
);
