import React from "react";
import { IconEdit } from "../../assets/static/icon-edit";
import { IconDelete } from "../../assets/static/icon-delete";
import { IconAdd } from "../../assets/static/icon-add";
import { Link } from "@reach/router";

// Import pres-entational components of styled components
import { Table as ShowTable, Delete } from "./styles";

export const Table = (props) => {
  const {
    col1,
    col2,
    col3,
    col4,
    col5,
    col6,
    col7,
    col8,
    title,
    data,
    iconDelete = false,
    onClick,
  } = props;
  let countColum = -1;

  // Counting the props receive for know the columns to create
  Object.keys(props).forEach((col) => {
    countColum++;
  });

  // Function for create table. Receive propiedades for create the columns necessary
  const createTable = (countColum) => {
    let table = [];

    for (let i = 0; i < data.length; i++) {
      let children = [];

      if (iconDelete) {
        children.push(<td key={"Number " + data[i].id}>{i + 1}</td>);
        children.push(<td key={"Name " + data[i].id}>{data[i].name}</td>);
        children.push(
          <td key={"Link " + data[i].id}>
            <Delete onClick={onClick}>
              <IconDelete
                fill="#de18ad"
                width="50px"
                heigth="50px"
                id={data[i].id}
              />
            </Delete>
          </td>
        );
      } else {
        let link;
        if (props.title == "Usuarios") {
          link = (
            <Link to={`/admin-edit-user/${data[i].id}`}>
              <IconEdit width="25px" height="25px" fill="#de18ad" />
            </Link>
          );
        }
        if (props.title == "Clientes") {
          link = (
            <Link to={`/admin-client-info/${data[i].id}`}>
              <IconAdd width="25px" height="25px" fill="#de18ad" />
            </Link>
          );
        }
        children.push(<td key={"Number " + data[i].id}>{i + 1}</td>);
        children.push(<td key={"Name " + data[i].id}>{data[i].name}</td>);
        children.push(<td key={"Email " + data[i].id}>{data[i].email}</td>);
        children.push(<td key={"Type " + data[i].id}>{data[i].type}</td>);
        children.push(<td key={"Link " + data[i].id}>{link}</td>);
      }
      table.push(<tr key={data[i].id}>{children}</tr>);
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
