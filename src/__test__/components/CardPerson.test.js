import React from "react";
import { mount } from "enzyme";

import { CardPerson } from "../../components/CardPerson";
import { Buttons } from "../../components/Buttons";
import { IconAdd } from "../../assets/static/icon-add";
import { IconEdit } from "../../assets/static/icon-edit";
import {
  Person,
  PersonName,
  Information,
  Link,
} from "../../components/CardPerson/styles";

import { color, responsivetablet, value } from "../../__mocks__/Buttons";

describe("<CardPerson />", () => {
  test("Render of CardPerson component", () => {
    const cardPerson = mount(<CardPerson />);
    expect(cardPerson.length).toEqual(1);
  });
});

describe("<Buttons />", () => {
  test("Render of Buttons component", () => {
    const buttons = mount(
      <Buttons color={color} responsivetablet={responsivetablet}>
        {" "}
        {value}{" "}
      </Buttons>
    );
    expect(buttons.length).toEqual(1);
  });
});

describe("<IconAdd />", () => {
  test("Render of IconAdd component", () => {
    const iconAdd = mount(<IconAdd />);
    expect(iconAdd.length).toEqual(1);
  });
});

describe("<IconEdit />", () => {
  test("Render of IconEdit component", () => {
    const iconEdit = mount(<IconEdit />);
    expect(iconEdit.length).toEqual(1);
  });
});

describe("<Person />", () => {
  test("Render of the style component Person", () => {
    const person = mount(<Person />);
    expect(person.length).toEqual(1);
  });
});

describe("<PersonName />", () => {
  test("Render of the style component PersonName", () => {
    const personName = mount(<PersonName />);
    expect(personName.length).toEqual(1);
  });
});

describe("<Information />", () => {
  test("Render of the style component Information", () => {
    const information = mount(<Information />);
    expect(information.length).toEqual(1);
  });
});

describe("<Link />", () => {
  test("Render of the style component Link", () => {
    const link = mount(<Link to="/" />);
    expect(link.length).toEqual(1);
  });
});
