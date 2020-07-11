import React from "react";
import { mount } from "enzyme";
import { NameStatus } from "../../components/NameStatus";

import { title, to } from "../../__mocks__/NameStatus";

describe("<NameStatus />", () => {
  test("Component Name Status Rendering", () => {
    const namestatus = mount(<NameStatus title={title} to={to} />);
    expect(namestatus.length).toEqual(1);
  });
});
