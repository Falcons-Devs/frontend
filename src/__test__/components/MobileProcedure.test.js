import React from "react";
import { mount } from "enzyme";
import { MobileProcedure } from "../../components/MobileProcedure";

import { value } from "../../__mocks__/MobileProcedure";

describe("<MobileProcedure />", () => {
  test("Component Mobile Procedure Rendering", () => {
    const mobileprocedure = mount(<MobileProcedure value={value} />);
    expect(mobileprocedure.length).toEqual(1);
  });
});
