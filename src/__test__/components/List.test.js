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
    const list = mount(
      <List>
        <Container>
          {list.map((item, index) => (
            <ProcedureContainer full={full} key={topic + index}>
              <P>{item}</P>
              <IconCheckboxFalse width="24px" />
            </ProcedureContainer>
          ))}
          <Title>{title}</Title>
        </Container>
      </List>
    );
    expect(list.length).toEqual(1);
  });
});
