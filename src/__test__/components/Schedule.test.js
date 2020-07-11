import React from "react";
import { mount } from "enzyme";
import { Schedule } from "../../components/Schedule";

import {
  title,
  startTime,
  daysToShow,
  endTime,
  showFromCurrentDay,
} from "../../__mocks__/Schedule";

describe("<Schedule />", () => {
  test("Component Schedule Rendering", () => {
    const schedule = mount(
      <Schedule
        title={title}
        startTime={startTime}
        endTime={endTime}
        daysToShow={daysToShow}
        showFromCurrentDay={showFromCurrentDay}
      />
    );
    expect(schedule.length).toEqual(1);
  });
});
