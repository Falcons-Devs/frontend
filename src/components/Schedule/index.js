import React from "react";
import {
  NameOfTheDay,
  DayNumber,
  TimeOfDay,
  SummaryOfTheAppointment,
  MonthAndYear,
} from "./Components";
import { Week, Title } from "./styles";

export const Schedule = ({ title }) => {
  var hoy = new Date();
  var dd = hoy.getDate();
  var mm = hoy.getMonth() + 1;
  var yyyy = hoy.getFullYear();
  const listNameOfTheDay = [
    "",
    "Dom",
    "Lun",
    "Mar",
    "Mié",
    "Jue",
    "Vie",
    "Sáb",
  ];
  const listDayNumber = ["", "5", "6", "7", "8", "9", "10", "11"];
  const listTimeOfDay = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];
  const listSummaryOfTheAppointment = ["5", "6", "7", "8", "9", "10", "11"];
  return (
    <>
      <Title>{title}</Title>
      <Week>
        {listNameOfTheDay.map((item, index) => (
          <NameOfTheDay key={index} name={item} />
        ))}
        {listDayNumber.map((item, index) => (
          <DayNumber key={index} number={item} />
        ))}
        {listTimeOfDay.map((item, index) => {
          return (
            <>
              <TimeOfDay key={index} time={item} />
              {listSummaryOfTheAppointment.map((item, index) => (
                <SummaryOfTheAppointment client="Nombre del cliente" />
              ))}
            </>
          );
        })}
        <MonthAndYear month="Julio" year="2020" />
      </Week>
    </>
  );
};
