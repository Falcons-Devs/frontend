import React from "react";
import { mount } from "enzyme";

import Context from "../../Context";
import { Header } from "../../components/Header";

describe("<Header />", () => {
  test("Render of Header component", () => {
    const header = mount(
      <Context.Provider>
        <Header />
      </Context.Provider>
    );
    expect(header.length).toEqual(1);
  });
});

describe("<Header />", () => {
  test("Render of Header component for Public", () => {
    const header = mount(
      <Context.Provider value={{ userType: "Public" }}>
        <Header />
      </Context.Provider>
    );
    expect(header.length).toEqual(1);
  });
});
