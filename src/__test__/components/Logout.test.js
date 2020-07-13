import React from "react";
import { mount } from "enzyme";
import { Logout } from "../../components/Logout";
import Context from "../../Context";

describe("<Logout />", () => {
  test("Component Logout Rendering", () => {
    const logout = mount(
      <Context.Provider>
        <Logout />
      </Context.Provider>
    );
    expect(logout.length).toEqual(1);
  });
});
