import React from "react";
import { IconAccountCircle } from "../../assets/static/icon-accountCircle";

import { Beautician, BeauticianName, Information } from "./styles";
import { Buttons } from "../Buttons";

export const CardBeautician = ({ estheticianName, email, schedule }) => {
  return (
    <Beautician>
      <BeauticianName>
        <IconAccountCircle width="80px" height="90px" fill="#DE18AD" />
        <div>
          <input type="text" className="duration" value={estheticianName} />
        </div>
      </BeauticianName>
      <Information>
        <div>
          <label htmlFor="cost">Email</label>
          <input type="text" className="duration" value={email} />
          <label htmlFor="duration">Horario</label>
          <input type="text" className="hous" value={schedule} />
        </div>
      </Information>
      <Buttons value="Ver agenda" color="#2DD881" />
    </Beautician>
  );
};
