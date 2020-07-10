import React from "react";
import { mount } from "enzyme";

import Context from "../../Context";
import { Header } from "../../components/Header";
import { HeaderStyle, Wrap } from "../../components/Header/styles";

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

describe("<HeaderStyle />", () => {
  test("Render of the style component HeaderStyle", () => {
    const headerStyle = mount(<HeaderStyle />);
    expect(headerStyle.length).toEqual(1);
  });
});

describe("<Wrap />", () => {
  test("Render of the Wrap component style", () => {
    const wrap = mount(<Wrap />);
    expect(wrap.length).toEqual(1);
  });
});
