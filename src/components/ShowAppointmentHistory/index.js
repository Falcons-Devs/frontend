import React from "react";

// Import the icons svg
import { IconAccountCircle } from "../../assets/static/icon-accountCircle";

// Import pres-entational components of styled components
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
      {/* Show components with appointment history */}
      <NextAppointment>
        <div>
          <label htmlFor="cost">Costo</label>
          <input type="text" className="cost" value={cost} />
          <label htmlFor="duration">Duración</label>
          <input type="text" className="hous" value={duration} />
        </div>
        <h4>Descripción</h4>
        <div>
          <label htmlFor="process">Procedimiento 1</label>
          <input type="text" className="process" value={process} />
        </div>
        <div>
          <label htmlFor="process">Procedimiento 2</label>
          <input type="text" className="process" value={process} />
        </div>
        <div>
          <label htmlFor="process">Procedimiento 3</label>
          <input type="text" className="process" value={process} />
        </div>
      </NextAppointment>
    </MyProfile>
  );
};
