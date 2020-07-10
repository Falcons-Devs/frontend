import React from "react";
import { mount } from "enzyme";

import { Footer } from "../../components/Footer";
import { Social } from "../../components/Footer/Social";
import { NavBarFooter } from "../../components/Footer/NavBar";

describe("<Footer />", () => {
  test("Render del componente Footer", () => {
    const footer = mount(<Footer />);
    expect(footer.length).toEqual(1);
  });
});

describe("<Social />", () => {
  test("Render del componente Social", () => {
    const social = mount(<Social />);
    expect(social.length).toEqual(1);
  });
});

describe("<NavBarFooter />", () => {
  test("Render del componente Social", () => {
    const navbar = mount(<NavBarFooter />);
    expect(navbar.length).toEqual(1);
  });
});
