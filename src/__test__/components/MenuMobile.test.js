import React from "react";
import { mount } from "enzyme";
import { MenuMobile } from "../../components/MenuMobile";
import Context from "../../Context";

describe("<Buttons />", () => {
  test("Component Buttons Rendering", () => {
    const menu = mount(
      <Context.Provider>
        <MenuMobile />
      </Context.Provider>
    );
    expect(menu.length).toEqual(1);
  });
});
