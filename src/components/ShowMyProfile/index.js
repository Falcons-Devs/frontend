import React from "react";
import { IconAccountCircle } from "../../assets/static/icon-accountCircle";

import { MyProfile, Profile, NextAppointment, NameClient } from "./styles";

export const ShowMyProfile = ({ nameUser }) => {
  return (
    <MyProfile>
      <Profile>
        <IconAccountCircle width="80px" height="90px" fill="#DE18AD" />
        <div>
          <h2>Mi perfil</h2>
          <p>Faucibus eros urna mus egestas.</p>
        </div>
      </Profile>
      <NextAppointment>
        <h4>Proxima cita</h4>
        <div>
          <label htmlFor="process">Procedimiento</label>
          <input type="text" className="process" />
        </div>
        <div>
          <label htmlFor="hour">Hora</label>
          <input type="text" className="hous" />
          <label htmlFor="duration">Duración</label>
          <input type="text" className="duration" />
        </div>
      </NextAppointment>
      <NameClient>
        <IconAccountCircle width="50px" height="50px" fill="#DE18AD" />
        <p>{nameUser}</p>
      </NameClient>
    </MyProfile>
  );
};
