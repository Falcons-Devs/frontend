import React from "react";

// Import pres-entational components of styled components
import { Table as ShowTable } from "./styles";

export const Table = (props) => {
  const { col1, col2, col3, col4, col5, col6, col7, col8, title } = props;
  let countColum = -1;

  Object.keys(props).forEach((col) => {
    countColum++;
  });

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
        {createTable(countColum)}
        <tr>
          <td colSpan={countColum}> {title} </td>
        </tr>
      </tbody>
    </ShowTable>
  );
};
