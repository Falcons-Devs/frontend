import React from "react";
import { mount } from "enzyme";
import { Table as ShowTable } from "../../components/Table/styles";
import { Table } from "../../components/Table";
import {
  col1,
  col2,
  col3,
  col4,
  col5,
  col6,
  col7,
  col8,
  createTable,
  countColum,
  title,
} from "../../__mocks__/Table";

describe("<Table />", () => {
  test("Component Table Rendering", () => {
    const table = mount(
      <Table>
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
      </Table>
    );
    expect(table.length).toEqual(1);
  });
});
