import React from "react";
import { mount } from "enzyme";
import { ShowMyProfile } from "../../components/ShowMyProfile";

import { nameUser } from "../../__mocks__/ShowMyProfile";

describe("<ShowMyProfile />", () => {
  test("Component Show My Profile Rendering", () => {
    const profile = mount(<ShowMyProfile nameUser={nameUser} />);
    expect(profile.length).toEqual(1);
  });
});
