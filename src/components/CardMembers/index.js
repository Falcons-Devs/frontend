import React from "react";

import { IconAccountCircle } from "../../assets/static/icon-accountCircle";
// import { IconAccountCircle } from "../../";
import { Article } from "./styles";

export const CardMembers = ({ nameMember, position }) => {
  return (
    <>
      <Article>
        <article>
          <span>
            <IconAccountCircle width="110px" height="110px" fill="#DE18AD" />
          </span>
          <div id="name">
            <p> {nameMember} </p>
            <div></div>
          </div>
          <p id="project"> {position} </p>
        </article>
      </Article>
    </>
  );
};
