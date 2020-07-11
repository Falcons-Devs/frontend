import React from "react";
import { IconAccountCircle } from "../../assets/static/icon-accountCircle";

import { MyProfile, Profile, NextAppointment } from "./styles";

export const ShowAppointmentHistory = ({
  dateTime,
  estheticianName,
  cost,
  duration,
  process,
}) => {
  return (
    <MyProfile>
      <Profile>
        <IconAccountCircle width="80px" height="90px" fill="#DE18AD" />
        <div>
          <h2>{dateTime}</h2>
          <p>{estheticianName}</p>
        </div>
      </Profile>
      <NextAppointment>
        <div>
          <label htmlFor="cost">Costo</label>
          <input type="text" className="cost" defaultValue={cost} />
          <label htmlFor="duration">Duración</label>
          <input type="text" className="hous" defaultValue={duration} />
        </div>
        <h4>Descripción</h4>
        <div>
          <label htmlFor="process">Procedimiento 1</label>
          <input type="text" className="process" defaultValue={process} />
        </div>
        <div>
          <label htmlFor="process">Procedimiento 2</label>
          <input type="text" className="process" defaultValue={process} />
        </div>
        <div>
          <label htmlFor="process">Procedimiento 3</label>
          <input type="text" className="process" defaultValue={process} />
        </div>
      </NextAppointment>
    </MyProfile>
  );
};
