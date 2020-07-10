import React from "react";
import { mount } from "enzyme";

import { HeaderImages } from "../../components/HeaderImages";
import { BackgroudImages } from "../../components/HeaderImage/styles";

import { numberImg } from "../../__mocks__/HeaderImages";

describe("<HeaderImages />", () => {
  test("Render of HeaderImages component", () => {
    const headerImages = mount(
      <HeaderImages>
        <BackgroudImages numberImg={numberImg}></BackgroudImages>
      </HeaderImages>
    );
    expect(headerImages.length).toEqual(1);
  });
});
