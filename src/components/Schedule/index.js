import React, { Fragment } from "react";

// Import the components
import {
  NameOfTheDay,
  DayNumber,
  SelectedDayNumber,
  TimeOfDay,
  SummaryOfTheAppointment,
  MonthAndYear,
} from "./Components";

// Import pres-entational components of styled components
import { Week, Title, InputContainer } from "./styles";

/*---Getting the name of the day---*/
const functionDayOfTheWeekNumber = (number, daysToShow) => {
  switch (number) {
    case 0:
      return daysToShow === 1 ? "Domingo" : "Dom";
    case 1:
      return daysToShow === 1 ? "Lunes" : "Lun";
    case 2:
      return daysToShow === 1 ? "Martes" : "Mar";
    case 3:
      return daysToShow === 1 ? "Miércoles" : "Mié";
    case 4:
      return daysToShow === 1 ? "Jueves" : "Jue";
    case 5:
      return daysToShow === 1 ? "Viernes" : "Vie";
    case 6:
      return daysToShow === 1 ? "Sábado" : "Sáb";
  }
};

/*---Getting the name of the month---*/
const functionNameOfTheMonth = (number) => {
  switch (number) {
    case 0:
      return "Enero";
    case 1:
      return "Febrero";
    case 2:
      return "Marzo";
    case 3:
      return "Abril";
    case 4:
      return "Mayo";
    case 5:
      return "Junio";
    case 6:
      return "Julio";
    case 7:
      return "Agosto";
    case 8:
      return "Septiembre";
    case 9:
      return "Octubre";
    case 10:
      return "Noviembre";
    case 11:
      return "Diciembre";
  }
};

export const Schedule = ({
  title,
  startTime = "8:00:00",
  endTime = "20:00:00",
  daysToShow = 7,
  showFromCurrentDay = true,
}) => {
  /*---Obtaining the current day, month and year---*/
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const dayOfTheWeekNumber = today.getDay(); // 0, 1, 2, 3, 4, 5, 6

  /*---Obtaining array with the names according to the initial day---*/
  const namesAccordingToTheDay = [""];

  /*---Obtaining a array for the number of days from Sunday to Saturday---*/
  let nextDay = showFromCurrentDay
    ? today.getDate(today.setDate(day))
    : today.getDate(today.setDate(day - dayOfTheWeekNumber));
  let i = 0;
  let j = showFromCurrentDay ? dayOfTheWeekNumber : 0;
  const dayNumberList = [""];

  /*---Always show the current day---*/
  const iterations =
    daysToShow > dayOfTheWeekNumber || showFromCurrentDay
      ? daysToShow // Iterar con la cantidad de días enviados
      : dayOfTheWeekNumber + 1; // Mostrar todos los días hasta el día actual

  do {
    dayNumberList.push(nextDay);
    namesAccordingToTheDay.push(functionDayOfTheWeekNumber(j, iterations));
    /*---Limit to a 7-day cycle---*/
    j < 6 ? (j += 1) : (j = 0);

    i++;
    nextDay = today.getDate(today.setDate(nextDay + 1));
  } while (i < iterations);

  /*---Getting array of hours with start time and end time---*/
  const start = parseInt(startTime.split(":")[0]);
  const end = parseInt(endTime.split(":")[0]);
  const listOfWorkingHoursForTheDay = [];
  for (i = start; i < end; i++) {
    listOfWorkingHoursForTheDay.push(`${i}:00`);
  }

  const listDaysToShow = [];
  for (i = 0; i < iterations; i++) {
    listDaysToShow.push(i);
  }

  /*---get the number of total rows to display---*/
  const numberOfRows = end - start + 3;
  return (
    <>
      <Title>{title}</Title>
      <Week rows={numberOfRows} columns={iterations}>
        {namesAccordingToTheDay.map((item, index) => (
          <NameOfTheDay key={index} name={item} />
        ))}
        {dayNumberList.map((item, index) =>
          showFromCurrentDay && index === 1 ? (
            <SelectedDayNumber key={index} number={item} />
          ) : dayOfTheWeekNumber + 1 === index && !showFromCurrentDay ? (
            <SelectedDayNumber key={index} number={item} />
          ) : (
            <DayNumber key={index} number={item} />
          )
        )}
        {listOfWorkingHoursForTheDay.map((item, index) => {
          return (
            <Fragment key={"Fragment " + index}>
              <TimeOfDay key={"Hour " + item} time={item} />
              {listDaysToShow.map((item2, index) => (
                <SummaryOfTheAppointment key={index} client={item2} />
              ))}
            </Fragment>
          );
        })}
        <MonthAndYear
          columns={iterations}
          month={functionNameOfTheMonth(month)}
          year={year}
        />
      </Week>
      <InputContainer>
        <div>
          <label htmlFor="date">Día</label>
          <input type="date" />
        </div>
        <div>
          <label htmlFor="time">Hora</label>
          <input type="time" />
        </div>
      </InputContainer>
    </>
  );
};
