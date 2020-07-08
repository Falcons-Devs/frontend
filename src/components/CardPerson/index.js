import React from "react";
import { IconAccountCircle } from "../../assets/static/icon-accountCircle";
import { Person, PersonName, Information, Link } from "./styles";
import { Buttons } from "../Buttons";
import { IconAdd } from "../../assets/static/icon-add";

export const CardPerson = ({ name, email, schedule, to }) => {
  return (
    <Person>
      <PersonName>
        <IconAccountCircle width="80px" height="90px" fill="#DE18AD" />
        <div>
          <input type="text" value={name} />
        </div>
      </PersonName>
      <Information>
        <div>
          <label htmlFor="cost">Email</label>
          <input type="text" className="duration" value={email} />
          <label htmlFor="duration">Horario</label>
          <input type="text" className="hous" value={schedule} />
        </div>
      </Information>
      <Link to={to}>
        {screen.width <= 375 ? (
          <IconAdd width="30px" height="30px" fill="#de18ad" />
        ) : (
          <Buttons value="Ver agenda" color="#2DD881" />
        )}
      </Link>
    </Person>
  );
};
