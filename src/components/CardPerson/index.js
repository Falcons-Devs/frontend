import React from "react";

// Import the icons components
import { IconAccountCircle } from "../../assets/static/icon-accountCircle";
import { IconAdd } from "../../assets/static/icon-add";
import { IconEdit } from "../../assets/static/icon-edit";

// Import the components
import { Buttons } from "../Buttons";

// Import presentational components of styled components
import { Person, PersonName, Information, Link } from "./styles";

export const CardPerson = ({ name, email, schedule, to, type, title }) => {
  return (
    <Person>
      <PersonName>
        <IconAccountCircle width="80px" height="90px" fill="#DE18AD" />
        <div>
          <p>{name}</p>
          {type ? <p>{type}</p> : ""}
        </div>
      </PersonName>
      <Information>
        <div>
          <p>{email}</p>
          {schedule ? <p>Horario: {schedule}</p> : ""}
        </div>
      </Information>
      <Link to={to}>
        {screen.width <= 375 ? (
          type ? (
            <IconEdit width="30px" height="30px" fill="#de18ad" />
          ) : (
            <IconAdd width="30px" height="30px" fill="#de18ad" />
          )
        ) : (
          <Buttons value={title} color="#2DD881" />
        )}
      </Link>
    </Person>
  );
};
