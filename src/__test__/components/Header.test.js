import React from "react";
import { mount } from "enzyme";

import Context from "../../Context";
import { Header } from "../../components/Header";
import { Link } from "@reach/router";
import { NavBar } from "../../components/Header/NavBar";
import { HeaderStyle, Wrap } from "../../components/Header/styles";

describe("<Header />", () => {
  test("Render of Header component", () => {
    const header = mount(
      <Context.Provider>
        <Header>
          <HeaderStyle>
            <Wrap>
              <Link to="/" aria-label="Logo de OCS"></Link>
              <NavBar />
            </Wrap>
          </HeaderStyle>
        </Header>
      </Context.Provider>
    );
    expect(header.length).toEqual(1);
  });
});
