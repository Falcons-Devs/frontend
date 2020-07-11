import React from "react";

// Import the icons svg
import { IconAccountCircle } from "../../../assets/static/icon-accountCircle";

// Import pres-entational components of styled components
import {
  NameOfTheDayStyle,
  DayNumberStyle,
  SelectedDayNumberStyle,
  TimeOfDayStyle,
  SummaryOfTheAppointmentStyle,
  Name,
  MonthAndYearStyle,
} from "./styles";

// Show day name
export const NameOfTheDay = ({ name }) => (
  <NameOfTheDayStyle>{name}</NameOfTheDayStyle>
);

// Show the number of the day
export const DayNumber = ({ number }) => (
  <DayNumberStyle>{number}</DayNumberStyle>
);

// Show selected day number
export const SelectedDayNumber = ({ number }) => (
  <SelectedDayNumberStyle>{number}</SelectedDayNumberStyle>
);

// Show time of day
export const TimeOfDay = ({ time }) => <TimeOfDayStyle>{time}</TimeOfDayStyle>;

// Show appointment summary
export const SummaryOfTheAppointment = ({ client }) => (
  <SummaryOfTheAppointmentStyle>
    <IconAccountCircle fill="#fff" />
    <Name>{client}</Name>
  </SummaryOfTheAppointmentStyle>
);

// Show month and year
export const MonthAndYear = ({ columns, month, year }) => (
  <MonthAndYearStyle columns={columns}>
    {month} {year}
  </MonthAndYearStyle>
);
