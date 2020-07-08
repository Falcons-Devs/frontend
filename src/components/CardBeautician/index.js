import React from "react";
import { IconAccountCircle } from "../../assets/static/icon-accountCircle";
import { Beautician, BeauticianName, Information, Link } from "./styles";
import { Buttons } from "../Buttons";
import { IconAdd } from "../../assets/static/icon-add";

export const CardBeautician = ({ estheticianName, email, schedule }) => {
  return (
    <Beautician>
      <BeauticianName>
        <IconAccountCircle width="80px" height="90px" fill="#DE18AD" />
        <div>
          <input type="text" value={estheticianName} />
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
      <Link to="/admin-beautician-diary">
        {screen.width <= 375 ? (
          <IconAdd width="30px" height="30px" fill="#de18ad" />
        ) : (
          <Buttons value="Ver agenda" color="#2DD881" />
        )}
      </Link>
    </Beautician>
  );
};
