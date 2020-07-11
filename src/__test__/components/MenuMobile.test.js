import React from "react";
import { mount, shallow } from "enzyme";
import { MenuMobile } from "../../components/MenuMobile";
import Context from "../../Context";

describe("<MenuMobile />", () => {
  test("Component Menu Mobile Rendering", () => {
    const menu = mount(
      <Context.Provider>
        <MenuMobile />
      </Context.Provider>
    );
    expect(menu.length).toEqual(1);
  });
});

describe("<MenuMobile />", () => {
  test("Component Menu Mobile Rendering for Public", () => {
    const menu = mount(
      <Context.Provider value={{ userType: "Public" }}>
        <MenuMobile />
      </Context.Provider>
    );
    expect(menu.length).toEqual(1);
  });
});

describe("<MenuMobile />", () => {
  test("Component Menu Mobile Rendering for Client", () => {
    const menu = mount(
      <Context.Provider value={{ userType: "Client" }}>
        <MenuMobile />
      </Context.Provider>
    );
    expect(menu.length).toEqual(1);
  });
});

describe("<MenuMobile />", () => {
  test("Component Menu Mobile Rendering for Beautician", () => {
    const menu = mount(
      <Context.Provider value={{ userType: "Beautician" }}>
        <MenuMobile />
      </Context.Provider>
    );
    expect(menu.length).toEqual(1);
  });
});

describe("<MenuMobile />", () => {
  test("Component Menu Mobile Rendering for Admin", () => {
    const menu = mount(
      <Context.Provider value={{ userType: "Admin" }}>
        <MenuMobile />
      </Context.Provider>
    );
    expect(menu.length).toEqual(1);
  });
});
