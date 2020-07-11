import React from "react";

// Import pres-entational components of styled components
import { Table as ShowTable } from "./styles";

export const Table = (props) => {
  const { col1, col2, col3, col4, col5, col6, col7, col8, title } = props;
  let countColum = -1;

  // Counting the props receive for know the columns to create
  Object.keys(props).forEach((col) => {
    countColum++;
  });

  // Function for create table. Receive propiedades for create the columns necessary
  const createTable = (countColum) => {
    let table = [];

    for (let i = 0; i < 6; i++) {
      let children = [];
      for (let j = 0; j < countColum; j++) {
        children.push(<td key={j}>&nbsp;</td>);
      }
      table.push(<tr key={i}>{children}</tr>);
    }
    return table;
  };

  return (
    <ShowTable>
      <thead>
        <tr>
          {/* Condition for create columns if receive the props  */}
          {col1 && <th> {col1} </th>}
          {col2 && <th> {col2} </th>}
          {col3 && <th> {col3} </th>}
          {col4 && <th> {col4} </th>}
          {col5 && <th> {col5} </th>}
          {col6 && <th> {col6} </th>}
          {col7 && <th> {col7} </th>}
          {col8 && <th> {col8} </th>}
        </tr>
      </thead>
      <tbody>
        {/* Calling the function for create the rows */}
        {createTable(countColum)}
        <tr>
          <td colSpan={countColum}> {title} </td>
        </tr>
      </tbody>
    </ShowTable>
  );
};
