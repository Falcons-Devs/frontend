import React from "react";

// Import the icons svg
import { IconAccountCircle } from "../../assets/static/icon-accountCircle";

// Import pres-entational components of styled components
import { MyProfile, Profile, NextAppointment, NameClient } from "./styles";

export const ShowMyProfile = ({
  email,
  nameUser,
  nameProcedure,
  hour,
  duration,
  nameBeautician,
}) => {
  return (
    <MyProfile>
      <Profile>
        <IconAccountCircle width="80px" height="90px" fill="#DE18AD" />
        <div>
          <h2>{nameUser}</h2>
          <p>{email}</p>
        </div>
      </Profile>
      <NextAppointment>
        <h4>Proxima cita</h4>
        <div>
          <label htmlFor="process">Procedimiento</label>
          <input
            type="text"
            className="process"
            value={nameProcedure}
            disabled
          />
        </div>
        <div>
          <label htmlFor="hour">Hora</label>
          <input type="text" className="hous" value={hour} disabled />
          <label htmlFor="duration">Duración</label>
          <input type="text" className="duration" value={duration} disabled />
        </div>
      </NextAppointment>
      <NameClient>
        <IconAccountCircle width="50px" height="50px" fill="#DE18AD" />
        <p>{nameBeautician}</p>
      </NameClient>
    </MyProfile>
  );
};
