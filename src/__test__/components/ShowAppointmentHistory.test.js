import React from "react";
import { mount } from "enzyme";
import { ShowAppointmentHistory } from "../../components/ShowAppointmentHistory";

import {
  dateTime,
  cost,
  duration,
  estheticianName,
  process,
} from "../../__mocks__/ShowAppointmentHistory";

describe("<ShowAppointmentHistory />", () => {
  test("Component Show Appointment History Rendering", () => {
    const appointmenthistory = mount(
      <ShowAppointmentHistory
        dateTime={dateTime}
        estheticianName={estheticianName}
        cost={cost}
        duration={duration}
        process={process}
      />
    );
    expect(appointmenthistory.length).toEqual(1);
  });
});
