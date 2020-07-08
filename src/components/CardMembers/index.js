import React from "react";
import { IconAccountCircle } from "../../assets/static/icon-accountCircle";
import { Article, Image } from "./styles";
import { IconGitHub } from "../../assets/static/icon-github";
import { IconLinkedIn } from "../../assets/static/icon-linkedin";
import { IconTwitter } from "../../assets/static/icon-twitter";

export const CardMembers = ({
  nameMember,
  position,
  img,
  github,
  linkedin,
  twitter,
}) => {
  return (
    <Article>
      <h2>{nameMember}</h2>
      <article>
        <span>
          {img ? (
            <Image src={img} />
          ) : (
            <IconAccountCircle width="110px" height="110px" fill="#DE18AD" />
          )}
        </span>
        <div id="name">
          <p> {nameMember} </p>
          {github ? (
            <a href={github} target="_blank">
              <IconGitHub width="25px" height="25px" fill="#DE18AD" />
            </a>
          ) : (
            ""
          )}
          {linkedin ? (
            <a href={linkedin} target="_blank">
              <IconLinkedIn width="25px" height="25px" />
            </a>
          ) : (
            ""
          )}
          {twitter ? (
            <a href={twitter} target="_blank">
              <IconTwitter width="25px" height="25px" />
            </a>
          ) : (
            ""
          )}
        </div>
        <p id="project"> {position} </p>
      </article>
    </Article>
  );
};
