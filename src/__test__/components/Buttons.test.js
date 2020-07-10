import React from "react";
import { mount } from "enzyme";
import { Buttons } from "../../components/Buttons";
import { Button } from "../../components/Buttons/styles";

import { color, responsivetablet, value } from "../../__mocks__/Buttons";

describe("<Buttons />", () => {
  test("Component Buttons Rendering", () => {
    const button = mount(
      <Buttons>
        <Button color={color} responsivetablet={responsivetablet}>
          {" "}
          {value}{" "}
        </Button>
      </Buttons>
    );
    expect(button.length).toEqual(1);
  });
});
