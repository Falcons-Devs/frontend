import React from "react";
import { mount } from "enzyme";

import { List } from "../../components/List";
import { IconCheckboxFalse } from "../../assets/static/icon-checkbox-false";
import {
  Container,
  ProcedureContainer,
  P,
  Title,
} from "../../components/List/styles";

import { list, title, full, topic } from "../../__mocks__/List";

describe("<List />", () => {
  test("Render of List component", () => {
    const singleList = mount(
      <List list={list} title={title} full={full} topic={topic} />
    );
    expect(singleList.length).toEqual(1);
  });
});
