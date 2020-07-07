import React from "react";
import {
  CalendarStyle,
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
} from "./styles";

export const Calendar = () => {
  return (
    <CalendarStyle>
      <Sunday />
      <Monday />
      <Tuesday />
      <Wednesday />
      <Thursday />
      <Friday />
      <Saturday />
    </CalendarStyle>
  );
};
