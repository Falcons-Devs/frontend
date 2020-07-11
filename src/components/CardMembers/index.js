import React from "react";

// Import the icons components
import { IconAccountCircle } from "../../assets/static/icon-accountCircle";
import { IconGitHub } from "../../assets/static/icon-github";
import { IconLinkedIn } from "../../assets/static/icon-linkedin";
import { IconTwitter } from "../../assets/static/icon-twitter";

// Import presentational components of styled components
import { Article, Image } from "./styles";

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
          {/* Condition for show the images the profile if is receive */}
          {img ? (
            <Image src={img} />
          ) : (
            <IconAccountCircle width="110px" height="110px" fill="#DE18AD" />
          )}
        </span>
        <div id="name">
          <p> {nameMember} </p>
          {/* Condition for show the link to github if is receive */}
          {github ? (
            <a href={github} target="_blank">
              <IconGitHub width="25px" height="25px" fill="#DE18AD" />
            </a>
          ) : (
            ""
          )}
          {/* Condition for show the link to Linkedin if is receive */}
          {linkedin ? (
            <a href={linkedin} target="_blank">
              <IconLinkedIn width="25px" height="25px" />
            </a>
          ) : (
            ""
          )}
          {/* Condition for show the link to twitter if is receive */}
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
