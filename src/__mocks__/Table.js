import React from "react";
export const col1 = "Nombre";
export const col2 = "Nombre";
export const col3 = "Nombre";
export const col4 = "Nombre";
export const col5 = "Nombre";
export const col6 = "Nombre";
export const col7 = "Nombre";
export const col8 = "Nombre";
export const createTable = (countColum) => {
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
export const countColum = 8;
export const title = "Titulo";
export const data = [];
