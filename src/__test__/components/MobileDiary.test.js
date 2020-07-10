import React from "react";
import { mount } from "enzyme";
import { MobileDiary } from "../../components/MobileDiary";
import { datetime, client, time } from "../../__mocks__/MobileDiary";
describe("<MobileDiary />", () => {
  test("Component Mobile Diary Rendering", () => {
    const diary = mount(
      <MobileDiary datetime={datetime} time={time} client={client} />
    );
    expect(diary.length).toEqual(1);
  });
});
