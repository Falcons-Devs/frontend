import React from "react";
import { IconAccountCircle } from "../../../assets/static/icon-accountCircle";
import {
  NameOfTheDayStyle,
  DayNumberStyle,
  SelectedDayNumberStyle,
  TimeOfDayStyle,
  SummaryOfTheAppointmentStyle,
  Name,
  MonthAndYearStyle,
} from "./styles";

export const NameOfTheDay = ({ name }) => (
  <NameOfTheDayStyle>{name}</NameOfTheDayStyle>
);
export const DayNumber = ({ number }) => (
  <DayNumberStyle>{number}</DayNumberStyle>
);
export const SelectedDayNumber = ({ number }) => (
  <SelectedDayNumberStyle>{number}</SelectedDayNumberStyle>
);
export const TimeOfDay = ({ time }) => <TimeOfDayStyle>{time}</TimeOfDayStyle>;
export const SummaryOfTheAppointment = ({ client }) => (
  <SummaryOfTheAppointmentStyle>
    <IconAccountCircle fill="#fff" />
    <Name>{client}</Name>
  </SummaryOfTheAppointmentStyle>
);
export const MonthAndYear = ({ columns, month, year }) => (
  <MonthAndYearStyle columns={columns}>
    {month} {year}
  </MonthAndYearStyle>
);
