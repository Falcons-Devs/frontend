import React from "react";
import { mount } from "enzyme";
import { NameStatus } from "../../components/NameStatus";

describe("<NameStatus />", () => {
  test("Component Name Status Rendering", () => {
    const namestatus = mount(<NameStatus title="e" to="/" />);
    expect(namestatus.length).toEqual(1);
  });
});
